import { pool } from "./db.js";
import { getCurrentDatatime, getCurrentDate } from "../utils/returnDate.js";

export default class Users {
  constructor(nome, email, senha, tipo_usuario, perfil, foto) {
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._tipo_usuario = tipo_usuario;
    this._perfil = perfil;
    this._foto = foto;
  }

  get nome() {
    return this._nome;
  }

  get email() {
    return this._email;
  }

  get senha() {
    return this._senha;
  }

  get tipoUsuario() {
    return String(this._tipo_usuario).toLowerCase();
  }

  get data_criacao() {
    return getCurrentDate();
  }

  get ultimo_login() {
    return getCurrentDatatime();
  }

  get perfil() {
    return this._perfil;
  }

  get foto() {
    return this._foto;
  }


  //Salvar um novo usuário no banco
  async saveNewUser() {
    const client = await pool.connect();
    try {
      const queryText = 'INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9);';

      await client.query('BEGIN TRANSACTION');
      await client.query(queryText, [this.nome, this.email, this.senha, this.tipoUsuario, this.data_criacao, this.ultimo_login, 'Ativo', this.perfil, this.foto]);
      await client.query('COMMIT');

      return true;
    } catch (error) {
      console.log(`Erro ao tentar inserir um usuário no banco: ${error.message}`);
      //Log de erro
      await client.query('ROLLBACK');
      return false;
    }
  }

  //Buscar a existência de um usuário no banco pelo seu nome e senha
  static async searchUser(name, password) {
    try {
      const queryText = 'select * from usuarios where nome = $1 and senha = $2 limit 1;';
      const result = await pool.query(queryText, [name, password]);
      return result.rowCount > 0;
    } catch (error) {
      console.error(`Erro na busca do usuário: ${error.message}`);
      throw new Error(`Erro na busca do usuário: ${error.message}`);
    }
  }
}
