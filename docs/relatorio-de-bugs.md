# Observações e relatório de bugs

## Modelo de registro (usado também no Jira)

- **ID:** (ex.: OBS-01 ou BUG-01)
- **Título:** resumo claro e curto
- **Ambiente:** API, endpoint, data da execução, ferramenta
- **Passos para reproduzir:** 1, 2, 3
- **Resultado esperado**
- **Resultado obtido**
- **Severidade:** baixa / média / alta
- **Evidência:** print ou trecho da resposta
- **Status:** aberto / em análise / fechado

---

## OBS-01 — ID não numérico retorna 404

- **Ambiente:** DummyJSON, `GET https://dummyjson.com/products/abc`, execução de 27/10/2026, Postman.
- **Passos:** 1) Enviar GET para `/products/abc`. 2) Observar status e mensagem.
- **Resultado esperado (hipótese):** muitas APIs tratam um identificador com formato inválido como requisição inválida (400 Bad Request).
- **Resultado obtido:** 404 Not Found, com mensagem contendo "not found".
- **Severidade:** baixa.
- **Análise:** não há especificação formal consultada neste projeto que defina o comportamento esperado, então isto é registrado como **observação para discussão**, e não como defeito confirmado. O teste CT-04 foi escrito para validar o comportamento atual (404).
- **Evidência:** resposta no Postman em [postman-obs-01.png](evidencias/postman-obs-01.png); registro no Jira em [jira-obs-01.png](evidencias/jira-obs-01.png).
- **Nota da captura:** a lista lateral exibe os nomes (URLs) usados no momento em que o print foi feito; é um detalhe visual e não altera os resultados registrados.
- **Status:** aberto (aguardando definição do comportamento esperado).

---

## Novos registros

Nenhuma divergência adicional foi registrada nos resultados de CT-05 a CT-10; os testes dessas requisições passaram na execução documentada.
