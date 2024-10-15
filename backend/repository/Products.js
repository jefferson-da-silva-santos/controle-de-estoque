import { getCurrentDatatime } from "../utils/returnDate.js";
import { pool } from "./db";

export default class Products {
  constructor(
    nome, 
    descricao, 
    categoria, 
    preco, 
    quantidadeEstoque, 
    codigoBarras, 
    dataValidade, 
    peso, 
    dimensoes, 
    imagemURL, 
    status, 
    marca, 
    modelo, 
    cor, 
    garantia, 
    unidadeMedida, 
    precoCusto, 
    margemLucro, 
    localizacaoEstoque, 
    nivelMinimoEstoque, 
    fornecedor
  ) {
    this._nome = nome;
    this._descricao = descricao;
    this._categoria = categoria;
    this._preco = preco;
    this._quantidadeEstoque = quantidadeEstoque;
    this._codigoBarras = codigoBarras;
    this._dataValidade = dataValidade;
    this._peso = peso;
    this._dimensoes = dimensoes;
    this._imagemURL = imagemURL;
    this._status = status;
    this._marca = marca;
    this._modelo = modelo;
    this._cor = cor;
    this._garantia = garantia;
    this._unidadeMedida = unidadeMedida;
    this._precoCusto = precoCusto;
    this._margemLucro = margemLucro;
    this._localizacaoEstoque = localizacaoEstoque;
    this._nivelMinimoEstoque = nivelMinimoEstoque;
    this._fornecedor = fornecedor;
  }

  get nome() {
    return this._nome;
  }

  get descricao() {
    return this._descricao;
  }

  get categoria() {
    return this._categoria;
  }

  get preco() {
    return this._preco;
  }

  get quantidadeEstoque() {
    return this._quantidadeEstoque;
  }

  get codigoBarras() {
    return this._codigoBarras;
  }

  get dataEntrada() {
    return getCurrentDatatime();
  }

  get dataValidade() {
    return this._dataValidade;
  }

  get peso() {
    return this._peso;
  }

  get dimensoes() {
    return this._dimensoes;
  }

  get imagemURL() {
    return this._imagemURL;
  }

  get status() {
    return this._status;
  }

  get marca() {
    return this._marca;
  }

  get modelo() {
    return this._modelo;
  }

  get cor() {
    return this._cor;
  }

  get garantia() {
    return this._garantia;
  }

  get unidadeMedida() {
    return this._unidadeMedida;
  }

  get precoCusto() {
    return this._precoCusto;
  }

  get margemLucro() {
    return this._margemLucro;
  }

  get localizacaoEstoque() {
    return this._localizacaoEstoque;
  }

  get nivelMinimoEstoque() {
    return this._nivelMinimoEstoque;
  }

  get fornecedor() {
    return this._fornecedor;
  }

  async saveNewProduct() {
    const client = await pool.connect();
    try {
      const queryText = 'INSERT INTO produtos VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21);';
      const queryValues = [
        this._nome,
        this.descricao,
        this.categoria,
        this.preco,
        this.quantidadeEstoque,
        this.codigoBarras
      ]
    } catch (error) {
      
    }
  }
}