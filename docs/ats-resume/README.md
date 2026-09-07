# Currículo ATS

A fonte semântica fica em public/ats-resume/index.html, com estilos de tela e
impressão em public/ats-resume/resume.css. O PDF publicado é
public/carlos-moraes-rodrigues-devops-senior.pdf.

## Gerar

É necessário ter Google Chrome ou Chromium instalado. Se o executável estiver em
outro caminho, informe-o por meio da variável CHROME_BIN.

    npm run resume:generate

## Validar

A validação requer pdfinfo, pdftotext e pdftohtml, disponíveis no pacote
poppler-utils. Ela verifica o limite de duas páginas, o texto obrigatório, a
ordem de leitura, termos não sustentados e as anotações de links do PDF.

    npm run resume:validate

Para a revisão visual, execute npm run dev e abra /ats-resume/. Depois de alterar
o conteúdo ou o CSS, gere e valide novamente o PDF.
