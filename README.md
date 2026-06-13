# Sorteio | Espaço By Liliane Schiaffino

Versão simples com visual bonito, logo da loja e envio para Google Sheets.

## Publicação na Cloudflare Pages

Use:

- Framework preset: None
- Build command: vazio
- Build output directory: /
- Root directory: vazio

## Como fazer as respostas irem para Google Sheets

1. Crie uma planilha no Google Sheets.
2. Vá em Extensões > Apps Script.
3. Apague o conteúdo padrão.
4. Cole o código do arquivo `google-apps-script.gs`.
5. Salve.
6. Execute a função `criarCabecalho` uma vez.
7. Clique em Implantar > Nova implantação.
8. Tipo: App da Web.
9. Executar como: Você.
10. Quem pode acessar: Qualquer pessoa.
11. Copie a URL gerada.
12. No arquivo `index.html`, troque:

COLE_AQUI_A_URL_DO_APPS_SCRIPT

pela URL da implantação.

Depois envie os arquivos atualizados para o GitHub.
