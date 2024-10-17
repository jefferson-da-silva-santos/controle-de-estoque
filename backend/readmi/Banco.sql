CREATE EXTENSION IF NOT EXISTS "pgcrypto"; 

CREATE DATABASE banco_controle_estoque WITH ENCODING 'UTF8';

CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE,
  descricao TEXT NOT NULL
);

CREATE TABLE subcategorias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE,
  descricao TEXT NOT NULL
);

CREATE TABLE cores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE unidades_de_medida (
  id SERIAL PRIMARY KEY,
  unidade VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE marcas (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL UNIQUE,
  descricao TEXT NOT NULL
);

CREATE TABLE fornecedores (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cnpj CHAR(14) NOT NULL,
  email VARCHAR(100) NOT NULL,
  endereco VARCHAR(200) NOT NULL,
  telefone VARCHAR(15) NOT NULL
);

CREATE TABLE armazens (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  endereco VARCHAR(200) NOT NULL
);

CREATE TABLE usuarios (
  id UUID DEFAULT gen_random_uuid(),
  nome VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha BYTEA NOT NULL,
  nivelAcesso VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT NOT NULL,
  codigo_barras VARCHAR(50) NOT NULL,
  preco_compra DECIMAL(10, 2) NOT NULL,
  preco_venda DECIMAL(10, 2) NOT NULL,
  categoria_id INTEGER,
  subcategoria_id INTEGER,
  quantidade_estoque INTEGER NOT NULL,
  data_entrada TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  data_validade DATE,
  peso DECIMAL(10, 3),
  dimensoes VARCHAR(100),
  imagem_url VARCHAR(255),
  ativo BOOLEAN NOT NULL,
  marca_id INTEGER,
  modelo VARCHAR(100),
  cor_id INTEGER,
  garantia INTEGER,
  unidade_de_medida_id INTEGER,
  margem_lucro DECIMAL(5, 2),
  localizacao_estoque VARCHAR(255),
  nivel_minimo_estoque INTEGER NOT NULL,
  fornecedor_id INTEGER,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id),
  FOREIGN KEY (subcategoria_id) REFERENCES subcategorias(id),
  FOREIGN KEY (marca_id) REFERENCES marcas(id),
  FOREIGN KEY (cor_id) REFERENCES cores(id),
  FOREIGN KEY (unidade_de_medida_id) REFERENCES unidades_de_medida(id),
  FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id)
);

CREATE TABLE estoque_armazens (
  id SERIAL PRIMARY KEY,
  armazem_id INTEGER NOT NULL,
  produto_id INTEGER NOT NULL,
  quantidade INTEGER NOT NULL,
  FOREIGN KEY (armazem_id) REFERENCES armazens(id),
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

CREATE TABLE movimento_estoque (
  id SERIAL PRIMARY KEY,
  produto_id INTEGER NOT NULL,
  tipo_movimentacao VARCHAR(20) NOT NULL,
  quantidade INTEGER NOT NULL,
  data_movimentacao TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  usuario_id UUID NOT NULL,
  descricao TEXT,
  FOREIGN KEY (produto_id) REFERENCES produtos(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE pedidos_compra (
  id SERIAL PRIMARY KEY,
  fornecedor_id INTEGER NOT NULL,
  data_pedido TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status_pedido VARCHAR(100) NOT NULL,
  usuario_id UUID NOT NULL,
  FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE itens_compra (
  id SERIAL PRIMARY KEY,
  pedido_compra_id INTEGER NOT NULL,
  produto_id INTEGER NOT NULL,
  quantidade INTEGER NOT NULL,
  preco_unitario DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (pedido_compra_id) REFERENCES pedidos_compra(id),
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
); 