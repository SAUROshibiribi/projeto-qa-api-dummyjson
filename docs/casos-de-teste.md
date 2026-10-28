# Casos de teste

Legenda de status: ✅ executado | ⏳ a executar. Atualize a coluna **Status** e **Resultado obtido** somente após rodar o caso.

| ID | Tipo | Cenário | Requisição | Resultado esperado | Status |
|---|---|---|---|---|---|
| CT-01 | Positivo | Listar produtos | GET `/products` | 200; `products` é lista não vazia; IDs e preços numéricos | ✅ |
| CT-02 | Positivo | Consultar produto existente | GET `/products/1` | 200; `id` = 1; título válido; preço numérico ≥ 0 | ✅ |
| CT-03 | Negativo | Consultar ID inexistente | GET `/products/9999999` | 404; mensagem contém "not found" | ✅ |
| CT-04 | Negativo | Consultar ID não numérico | GET `/products/abc` | 404; mensagem contém "not found" (ver OBS-01) | ✅ |
| CT-05 | Positivo | Paginação | GET `/products?limit=5&skip=10` | 200; 5 produtos; `limit` = 5 e `skip` = 10 | ✅ |
| CT-06 | Positivo | Busca com resultado | GET `/products/search?q=phone` | 200; lista com pelo menos 1 produto | ✅ |
| CT-07 | Negativo | Busca sem resultado | GET `/products/search?q=xyzxyzxyz` | 200; lista vazia; `total` = 0 | ✅ |
| CT-08 | Positivo | Criar produto | POST `/products/add` | 201; resposta contém `id` e o `title` enviado | ✅ |
| CT-09 | Positivo | Atualizar produto | PUT `/products/1` | 200; `title` atualizado na resposta | ✅ |
| CT-10 | Positivo | Excluir produto | DELETE `/products/1` | 200; `isDeleted` = true | ✅ |

**Observação importante sobre CT-08 a CT-10:** a DummyJSON *simula* criação, atualização e exclusão (os dados não persistem de verdade). Por isso, os testes validam a resposta da API, e não uma consulta posterior ao dado alterado. Se o resultado real divergir do esperado acima, registre como observação em [relatorio-de-bugs.md](relatorio-de-bugs.md).

## Verificação transversal

Os CT-05 a CT-10 incluem a verificação de tempo de resposta abaixo de 1000 ms. Esse limite é uma meta de estudo, não um requisito oficial da API.

## Resultado obtido

| ID | Status HTTP obtido | Testes aprovados | Data | Observação |
|---|---|---|---|---|
| CT-01 | 200 | 6 | 27/10/2026 | |
| CT-02 | 200 | 4 | 27/10/2026 | |
| CT-03 | 404 | 2 | 27/10/2026 | |
| CT-04 | 404 | 2 | 27/10/2026 | Ver OBS-01 |
| CT-05 | 200 | 4 | 27/10/2026 | |
| CT-06 | 200 | 3 | 27/10/2026 | |
| CT-07 | 200 | 3 | 27/10/2026 | |
| CT-08 | 201 | 3 | 27/10/2026 | |
| CT-09 | 200 | 3 | 27/10/2026 | |
| CT-10 | 200 | 3 | 27/10/2026 | |
