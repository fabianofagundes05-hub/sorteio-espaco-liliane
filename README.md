# Sorteio | Espaço By Liliane Schiaffino

Projeto pronto para publicar no Cloudflare Pages com:
- Página pública do sorteio
- Formulário de participação
- Banco Cloudflare D1
- Painel administrativo
- Sorteio automático
- Exportação CSV

## 1. Instalar o Wrangler

```bash
npm install -g wrangler
```

Depois faça login:

```bash
wrangler login
```

## 2. Criar o banco D1

Dentro da pasta do projeto, execute:

```bash
wrangler d1 create sorteio-espaco-liliane
```

Copie o `database_id` que aparecer no terminal e cole no arquivo `wrangler.toml`, no campo:

```toml
database_id = "COLE_AQUI_O_DATABASE_ID"
```

## 3. Criar as tabelas

Execute:

```bash
wrangler d1 migrations apply sorteio-espaco-liliane
```

## 4. Testar localmente

```bash
wrangler pages dev .
```

Abra o endereço que aparecer no terminal.

## 5. Publicar

```bash
wrangler pages deploy .
```

## 6. Acessar o painel

Depois de publicado, acesse:

```text
https://SEU-LINK-DA-CLOUDFLARE.pages.dev/admin.html
```

## Observação importante

O painel administrativo ainda não tem senha. Para uso real, recomendo proteger o `/admin.html` com Cloudflare Access ou colocar uma senha simples via Worker.
