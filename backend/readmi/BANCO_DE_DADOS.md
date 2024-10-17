Com os atributos adicionais que você quer na tabela **Produtos**, o número de tabelas e a organização do banco de dados aumentará para acomodar essas informações de forma eficiente e organizada. Aqui está a estrutura revisada e organizada do banco de dados:

### Tabela Principal:
1. **Produtos**
   - Armazena os detalhes dos produtos.
   - Colunas:
     - `id` (PK)
     - `nome`
     - `descricao`
     - `codigo_barras`
     - `preco_compra`
     - `preco_venda`
     - `categoria_id` (FK para a tabela de categorias)
     - `subcategoria_id` (FK para a tabela de subcategorias)
     - `quantidade_estoque`
     - `data_entrada`
     - `data_validade`
     - `peso`
     - `dimensoes`
     - `imagem_url`
     - `ativo` (boolean)
     - `marca_id` (FK para a tabela de marcas)
     - `modelo`
     - `cor_id` (FK para a tabela de cores)
     - `garantia` (duração em meses ou anos)
     - `unidade_de_medida_id` (FK para a tabela de unidades de medida)
     - `margem_lucro`
     - `localizacao_estoque` (detalha onde o produto está armazenado)
     - `nivel_minimo_estoque`
     - `fornecedor_id` (FK para a tabela de fornecedores)

### Tabelas Adicionais Necessárias:
Para organizar corretamente os dados relacionados aos novos atributos, serão necessárias mais tabelas para normalizar as informações e evitar redundância.

2. **Categorias**
   - Armazena as categorias dos produtos.
   - Colunas:
     - `id` (PK)
     - `nome`
     - `descricao`

3. **Subcategorias**
   - Armazena as subcategorias dos produtos.
   - Colunas:
     - `id` (PK)
     - `nome`
     - `categoria_id` (FK para a tabela de categorias)

4. **Marcas**
   - Armazena as marcas dos produtos.
   - Colunas:
     - `id` (PK)
     - `nome`
     - `descricao` (opcional)

5. **Cores**
   - Armazena as cores dos produtos.
   - Colunas:
     - `id` (PK)
     - `nome`

6. **Unidades_de_medida**
   - Armazena as unidades de medida usadas nos produtos (ex.: kg, metros, litros).
   - Colunas:
     - `id` (PK)
     - `unidade`

7. **Fornecedores**
   - Armazena os dados dos fornecedores.
   - Colunas:
     - `id` (PK)
     - `nome`
     - `contato`
     - `endereco`
     - `email`
     - `telefone`

8. **Movimentacoes_estoque**
   - Registra as movimentações de entrada e saída de estoque.
   - Colunas:
     - `id` (PK)
     - `produto_id` (FK para a tabela de produtos)
     - `tipo_movimentacao` (entrada ou saída)
     - `quantidade`
     - `data_movimentacao`
     - `usuario_id` (FK para a tabela de usuários)
     - `descricao`

9. **Pedidos_compra**
   - Registra os pedidos de compra feitos aos fornecedores.
   - Colunas:
     - `id` (PK)
     - `fornecedor_id` (FK para a tabela de fornecedores)
     - `data_pedido`
     - `status`
     - `usuario_id` (FK para a tabela de usuários)

10. **Itens_pedido_compra**
   - Armazena os itens de cada pedido de compra.
   - Colunas:
     - `id` (PK)
     - `pedido_compra_id` (FK para a tabela de pedidos de compra)
     - `produto_id` (FK para a tabela de produtos)
     - `quantidade`
     - `preco_unitario`

11. **Usuarios**
   - Armazena os dados dos usuários do sistema.
   - Colunas:
     - `id` (PK)
     - `nome`
     - `email`
     - `senha`
     - `permissao` (ex.: administrador, operador de estoque)

12. **Logs_atividades**
   - Registra todas as atividades dos usuários no sistema.
   - Colunas:
     - `id` (PK)
     - `usuario_id` (FK para a tabela de usuários)
     - `data_hora`
     - `acao`
     - `descricao`

13. **Armazens**
    - Armazena informações sobre os diferentes armazéns ou locais de estoque.
    - Colunas:
      - `id` (PK)
      - `nome`
      - `endereco`

14. **Estoque_armazens**
    - Armazena a quantidade de produtos em cada armazém.
    - Colunas:
      - `id` (PK)
      - `produto_id` (FK para a tabela de produtos)
      - `armazem_id` (FK para a tabela de armazéns)
      - `quantidade`

### Total de Tabelas:
Você vai precisar de **14 tabelas** no total, organizadas da seguinte forma:

1. `Produtos`
2. `Categorias`
3. `Subcategorias`
4. `Marcas`
5. `Cores`
6. `Unidades_de_medida`
7. `Fornecedores`
8. `Movimentacoes_estoque`
9. `Pedidos_compra`
10. `Itens_pedido_compra`
11. `Usuarios`
12. `Logs_atividades`
13. `Armazens`
14. `Estoque_armazens`

Essas tabelas irão garantir que todas as informações do seu sistema de controle de estoque estejam devidamente organizadas e estruturadas.

Claro! Aqui está a estrutura do banco de dados apresentada em forma de tabela, incluindo os tipos primitivos do PostgreSQL para cada atributo.

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Produtos**             | id                           | SERIAL                           |
|                          | nome                         | VARCHAR(255)                     |
|                          | descricao                    | TEXT                             |
|                          | codigo_barras                | VARCHAR(50)                      |
|                          | preco_compra                | DECIMAL(10, 2)                  |
|                          | preco_venda                 | DECIMAL(10, 2)                  |
|                          | categoria_id                | INTEGER                          |
|                          | subcategoria_id             | INTEGER                          |
|                          | quantidade_estoque          | INTEGER                          |
|                          | data_entrada                | DATE                             |
|                          | data_validade               | DATE                             |
|                          | peso                        | DECIMAL(10, 3)                  |
|                          | dimensoes                   | VARCHAR(100)                     |
|                          | imagem_url                  | VARCHAR(255)                     |
|                          | ativo                       | BOOLEAN                          |
|                          | marca_id                    | INTEGER                          |
|                          | modelo                      | VARCHAR(100)                     |
|                          | cor_id                      | INTEGER                          |
|                          | garantia                    | INTEGER                          |
|                          | unidade_de_medida_id       | INTEGER                          |
|                          | margem_lucro                | DECIMAL(5, 2)                   |
|                          | localizacao_estoque        | VARCHAR(255)                     |
|                          | nivel_minimo_estoque       | INTEGER                          |
|                          | fornecedor_id               | INTEGER                          |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Categorias**           | id                           | SERIAL                           |
|                          | nome                         | VARCHAR(255)                     |
|                          | descricao                    | TEXT                             |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Subcategorias**        | id                           | SERIAL                           |
|                          | nome                         | VARCHAR(255)                     |
|                          | categoria_id                | INTEGER                          |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Marcas**               | id                           | SERIAL                           |
|                          | nome                         | VARCHAR(255)                     |
|                          | descricao                    | TEXT                             |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Cores**                | id                           | SERIAL                           |
|                          | nome                         | VARCHAR(50)                      |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Unidades_de_medida**   | id                           | SERIAL                           |
|                          | unidade                      | VARCHAR(50)                      |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Fornecedores**         | id                           | SERIAL                           |
|                          | nome                         | VARCHAR(255)                     |
|                          | contato                      | VARCHAR(255)                     |
|                          | endereco                     | TEXT                             |
|                          | email                        | VARCHAR(100)                     |
|                          | telefone                     | VARCHAR(20)                      |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Movimentacoes_estoque**| id                           | SERIAL                           |
|                          | produto_id                  | INTEGER                          |
|                          | tipo_movimentacao           | VARCHAR(20)                      |
|                          | quantidade                   | INTEGER                          |
|                          | data_movimentacao           | TIMESTAMP                        |
|                          | usuario_id                  | INTEGER                          |
|                          | descricao                    | TEXT                             |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Pedidos_compra**       | id                           | SERIAL                           |
|                          | fornecedor_id               | INTEGER                          |
|                          | data_pedido                 | TIMESTAMP                        |
|                          | status                      | VARCHAR(50)                      |
|                          | usuario_id                  | INTEGER                          |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Itens_pedido_compra**  | id                           | SERIAL                           |
|                          | pedido_compra_id           | INTEGER                          |
|                          | produto_id                  | INTEGER                          |
|                          | quantidade                   | INTEGER                          |
|                          | preco_unitario              | DECIMAL(10, 2)                  |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Usuarios**             | id                           | SERIAL                           |
|                          | nome                         | VARCHAR(255)                     |
|                          | email                        | VARCHAR(100)                     |
|                          | senha                        | VARCHAR(255)                     |
|                          | permissao                   | VARCHAR(50)                      |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Logs_atividades**      | id                           | SERIAL                           |
|                          | usuario_id                  | INTEGER                          |
|                          | data_hora                   | TIMESTAMP                        |
|                          | acao                        | VARCHAR(100)                     |
|                          | descricao                    | TEXT                             |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Armazens**             | id                           | SERIAL                           |
|                          | nome                         | VARCHAR(255)                     |
|                          | endereco                     | TEXT                             |

| **Tabela**                | **Coluna**                   | **Tipo Primitivo (PostgreSQL)** |
|--------------------------|------------------------------|----------------------------------|
| **Estoque_armazens**     | id                           | SERIAL                           |
|                          | produto_id                  | INTEGER                          |
|                          | armazem_id                  | INTEGER                          |
|                          | quantidade                   | INTEGER                          |

### Total de Tabelas: 14
- Produtos
- Categorias
- Subcategorias
- Marcas
- Cores
- Unidades_de_medida
- Fornecedores
- Movimentacoes_estoque
- Pedidos_compra
- Itens_pedido_compra
- Usuarios
- Logs_atividades
- Armazens
- Estoque_armazens

Essa tabela resume a estrutura do banco de dados, incluindo as colunas e os tipos de dados necessários para cada tabela.