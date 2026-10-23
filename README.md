# Projeto de testes de API — DummyJSON

Projeto de portfólio para praticar testes de API com Postman. O foco é validar respostas HTTP e campos importantes do JSON em consultas de produtos, incluindo cenários positivos e negativos.

## Escopo

- API pública: https://dummyjson.com
- Recurso: produtos
- Ferramenta: Postman
- Coleção: Projeto QA API - DummyJSON
- Requisições: 4

## Casos de teste

| ID | Cenário | Verificações principais | Status observado | Testes aprovados |
|---|---|---|---:|---:|
| CT-01 | GET /products — listar produtos | Status 200; products é uma lista não vazia; IDs numéricos; preços numéricos e não negativos; títulos válidos | 200 | 6 |
| CT-02 | GET /products/1 — consultar produto existente | Status 200; ID igual a 1; título válido; preço numérico e não negativo | 200 | 4 |
| CT-03 | GET /products/9999999 — consultar ID inexistente | Status 404; mensagem contém "not found" | 404 | 2 |
| CT-04 | GET /products/abc — consultar ID não numérico | Status 404; mensagem contém "not found" | 404 | 2 |

O caso CT-03 tem uma descrição detalhada em [docs/CT-03-produto-inexistente.md](docs/CT-03-produto-inexistente.md).

## Resultados das execuções

- Na captura inicial do Collection Runner, foram registrados 14 testes aprovados, 0 reprovados e 0 ignorados.
- Em 23/10/2026, executei novamente a cópia da coleção incluída neste projeto usando Postman CLI 1.75.0: 4 requisições, 14 verificações aprovadas e 0 reprovadas.
- Os status recebidos nessa nova execução foram 200, 200, 404 e 404, na ordem dos casos CT-01 a CT-04.

Nos cenários CT-03 e CT-04, o status 404 é esperado. Os testes passam porque verificam esse status e se a mensagem da resposta contém "not found".

## Reproduzir a execução local

Com o Postman CLI instalado, execute a partir da pasta raiz do projeto:

    postman collection run "postman/collections/Projeto QA API - DummyJSON" --no-report-events

O parâmetro no final evita enviar os resultados desta execução ao Postman Cloud.

## Coleção do Postman

Os arquivos locais da coleção estão incluídos em postman/collections/Projeto QA API - DummyJSON. A coleção usa o formato YAML nativo do Postman Collection v3 e contém quatro arquivos de requisição e a pasta .resources. Mantenha todos esses arquivos juntos.

## Evidências

A captura inicial do Collection Runner foi salva na pasta do projeto, conforme informado pelo autor. A nova execução foi realizada pelo Postman CLI e seus resultados estão registrados acima.

## Limites

Este exercício cobre validações básicas de respostas HTTP e JSON nos quatro cenários descritos. Os resultados registrados são de execuções específicas; uma nova execução pode variar se a API estiver indisponível ou mudar.

## Próximos passos

1. Revisar a estrutura do projeto e os arquivos de evidência.
2. Publicar o repositório no GitHub.
3. Adicionar o link ao currículo somente depois da publicação.
