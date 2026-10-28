# Teste de carga com K6

## Instalação

- Windows: `winget install k6` (ou `choco install k6`)
- macOS: `brew install k6`
- Linux e outras opções: <https://grafana.com/docs/k6/latest/set-up/install-k6/>

Verifique com `k6 version`.

## Execução

Na raiz do projeto:

    k6 run k6/load-test.js

Para salvar o resumo como evidência:

    k6 run --summary-export=docs/evidencias/k6-resumo.json k6/load-test.js

## O que o script faz

5 usuários virtuais, por 30 segundos, consultam a listagem de produtos e o produto 1, validando status 200 e o conteúdo básico da resposta.

## Como ler o resultado

| Métrica | Significado |
|---|---|
| `http_req_duration` (avg, p(95)) | tempo de resposta médio e do percentil 95 (95% das requisições foram mais rápidas que esse valor) |
| `http_req_failed` | percentual de requisições com falha |
| `checks` | percentual de verificações aprovadas |
| `iterations` | quantas vezes o fluxo completo rodou |

As metas (`thresholds`) no início do script definem quando o teste é considerado aprovado ou reprovado. No JSON gerado por `--summary-export`, o valor `false` associado a um threshold significa que o limite não foi ultrapassado; neste relatório, os dois thresholds aparecem como `false`, em acordo com a aprovação mostrada no terminal. Consulte também a [documentação oficial do formato de resumo do K6](https://grafana.com/docs/k6/latest/results-output/end-of-test/custom-summary/).

## Resultado da execução

- Data: 27/10/2026
- Configuração: 5 usuários virtuais durante 30 segundos
- Requisições HTTP: 208 (104 iterações completas)
- `http_req_duration`: média de 211 ms; p(95) de 471,42 ms; máximo de 1,22 s
- `http_req_failed`: 0% (0 de 208)
- `checks`: 100% (416 de 416 aprovados)
- Thresholds: aprovados (`p(95) < 1000 ms` e falhas abaixo de 1%)

O maior tempo isolado foi 1,22 s, acima de 1 s. O limite do script é aplicado ao percentil 95, que ficou em 471,42 ms; portanto, esse pico não reprova o threshold definido.

Resumo bruto salvo em [`docs/evidencias/k6-resumo.json`](../docs/evidencias/k6-resumo.json).

> Carga leve de propósito: a DummyJSON é uma API pública de demonstração. Este resultado vale para esta execução em 27/10/2026; latência e disponibilidade podem variar.
