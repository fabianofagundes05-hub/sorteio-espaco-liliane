# Sorteio Espaço By Liliane Schiaffino

Projeto simples para Cloudflare Pages + D1.

## O que tem

- Página visual do sorteio
- Botão para Instagram da loja
- Formulário com nome, WhatsApp e Instagram
- Salvamento no Cloudflare D1
- Bloqueio por WhatsApp duplicado

## Configuração no Cloudflare Pages

Framework preset: None

Build command: deixe vazio

Build output directory: /

Root directory: /

## Banco D1

Crie um banco D1 chamado:

sorteio-espaco-liliane

Depois cole o database_id no wrangler.toml.

## Migration

Arquivo da tabela:

migrations/0001_create_participantes.sql
