# CT-03 — Consulta de produto inexistente

## Objetivo

Verificar como a API responde quando a requisição consulta um identificador de produto que não existe.

## Dados do caso

- **Método:** GET
- **Endpoint:** /products/9999999
- **Entrada:** ID 9999999

## Resultado esperado

- Status HTTP 404 Not Found.
- A propriedade message da resposta contém o texto "not found".

## Resultado observado

- Status HTTP 404 Not Found.
- A mensagem retornada foi: Product with id '9999999' not found.
- Os dois testes automatizados deste cenário apareceram como aprovados no Postman.

## Conclusão

O resultado observado corresponde às verificações definidas para este cenário: a API informou que o produto não foi encontrado e retornou o status esperado.
