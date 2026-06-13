# Sorteio | Espaço By Liliane Schiaffino

Página simples para coletar inscrições do sorteio.

## Cloudflare Pages

Configuração do deploy:

- Framework preset: None
- Build command: deixe vazio
- Build output directory: /
- Root directory: deixe vazio

## Importante

Para o formulário salvar respostas, é necessário configurar o Cloudflare D1.

1. Crie um banco D1 chamado:

sorteio-espaco-liliane

2. Crie um binding no Pages:

Variable name: DB
D1 database: sorteio-espaco-liliane

3. Execute a migration ou crie a tabela com o SQL abaixo:

CREATE TABLE IF NOT EXISTS participantes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  whatsapp TEXT NOT NULL UNIQUE,
  instagram TEXT NOT NULL,
  confirmou_seguir INTEGER NOT NULL DEFAULT 1,
  ip TEXT,
  user_agent TEXT,
  criado_em TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

## Instagram

O botão já aponta para:

https://www.instagram.com/espacobylilianee/
