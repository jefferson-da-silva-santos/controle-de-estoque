import { pool } from "../repository/db.js";

const testConnection = async () => {
  try {
    const res = await pool.query('select * from usuarios;');
    console.log(res.rows);
    
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } finally {
    pool.end(); // Fecha o pool de conexões após o teste
  }
};

testConnection();
