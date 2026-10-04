# Currículos ATS

Os currículos têm fontes HTML semânticas e compartilham os estilos de tela e
impressão em `public/ats-resume/resume.css`.

| Idioma | Fonte                                | PDF publicado                                         |
| ------ | ------------------------------------ | ----------------------------------------------------- |
| pt-BR  | `public/ats-resume/index.html`       | `public/carlos-moraes-rodrigues-ats-resume.pdf`       |
| en-US  | `public/ats-resume/en-US/index.html` | `public/carlos-moraes-rodrigues-ats-resume-en-us.pdf` |

O botão de download do currículo visual seleciona o PDF conforme o idioma ativo,
inclusive após alternar o idioma.

O conteúdo apresenta um perfil híbrido de engenharia de software e DevOps/plataforma.
Os arquivos usam o nome `carlos-moraes-rodrigues-ats-resume`, com sufixo `-en-us`
na versão em inglês. Os detalhes dos projetos ficam no portfólio, enquanto os ATS
permanecem limitados a duas páginas.

## Gerar

É necessário ter Google Chrome ou Chromium instalado. Se o executável estiver em
outro caminho, informe-o por meio da variável CHROME_BIN.

    npm run resume:generate

O comando gera ambos os idiomas. Para gerar somente um deles:

    npm run resume:generate -- en-US
    npm run resume:generate -- pt-BR

## Validar

A validação requer pdfinfo, pdftotext e pdftohtml, disponíveis no pacote
poppler-utils. Ela verifica o limite de duas páginas, o texto obrigatório, a
ordem de leitura, termos não sustentados e as anotações de links do PDF.

    npm run resume:validate

Sem argumentos, a validação verifica ambos os PDFs. Para validar um idioma:

    npm run resume:validate -- en-US
    npm run resume:validate -- pt-BR

Para a revisão visual, execute `npm run dev` e abra `/ats-resume/` e
`/ats-resume/en-US/`. Confira também os downloads em `/#/pt-BR/resume` e
`/#/en-US/resume`, incluindo a troca de idioma. Depois de alterar o conteúdo ou o
CSS, gere e valide novamente os PDFs afetados e revise as páginas impressas.
