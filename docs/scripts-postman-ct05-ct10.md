# Scripts utilizados (CT-05 a CT-10)

Os scripts executáveis estão nas requisições correspondentes da coleção do Postman: `postman/collections/Projeto QA API - DummyJSON/`. Este arquivo funciona como índice; a coleção é a fonte de referência para os códigos atualmente executados.

- **CT-05 — Paginação:** `GET /products?limit=5&skip=10`
- **CT-06 — Busca com resultado:** `GET /products/search?q=phone`
- **CT-07 — Busca sem resultado:** `GET /products/search?q=xyzxyzxyz`
- **CT-08 — Criar produto:** `POST /products/add`, com corpo JSON
- **CT-09 — Atualizar produto:** `PUT /products/1`, com corpo JSON
- **CT-10 — Excluir produto:** `DELETE /products/1`

As requisições CT-05 a CT-10 também verificam o tempo de resposta. A DummyJSON simula as operações de criação, atualização e exclusão; os dados não persistem de verdade.