# Gestão no Jira (Kanban)

## Configuração do quadro

- Projeto: **Projeto QA API - DummyJSON** (template Kanban, plano gratuito)
- Colunas: **A fazer → Fazendo → Feito**
- Tipos de item: Tarefa (caso de teste) e Bug/Observação

## Cards

Cada caso de teste (CT-01 a CT-10) é um card, com:

- Título: `CT-05 — Paginação de produtos`
- Descrição: requisição, resultado esperado
- Ao concluir: resultado obtido e link para a evidência

A observação OBS-01 foi aberta como item separado, seguindo o modelo de [relatorio-de-bugs.md](relatorio-de-bugs.md).

## Fluxo seguido

No quadro mostrado na evidência atual, os dez casos CT-01 a CT-10 estão em *Feito*, e OBS-01 está em *A fazer*.

1. Criar os cards em *A fazer*.
2. Mover para *Fazendo* ao executar no Postman.
3. Mover para *Feito* com o resultado registrado.

## Evidência

Print do quadro em `docs/evidencias/` (ex.: `jira-kanban.png`).
