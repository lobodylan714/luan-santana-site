# Luan Santana — landing page de fã

Landing page estática e independente, feita com HTML, CSS e JavaScript. O estudo de ideia, mercado e viabilidade técnica está em [ESTUDO-VIABILIDADE.md](./ESTUDO-VIABILIDADE.md).

## Rodar localmente

Abra `index.html` no navegador. Não é necessário instalar dependências.

## Publicar no GitHub Pages

O workflow em `.github/workflows/pages.yml` publica a página quando há um push na branch `main`.

1. Crie um repositório no GitHub e envie para ele os arquivos do projeto (`index.html`, `styles.css`, `script.js` e a pasta `imagens`).
2. No repositório, abra **Settings → Pages** e, em **Build and deployment**, escolha **GitHub Actions** como fonte.
3. Envie uma alteração para a branch `main` ou execute manualmente o workflow **Publicar site no GitHub Pages** na aba **Actions**.
4. Quando a execução terminar, abra o endereço indicado em **Settings → Pages**. Para um repositório de projeto, o endereço normalmente segue o formato `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

O workflow copia apenas os arquivos da página e as imagens para a publicação; o README, este estudo e os arquivos de configuração não são incluídos no site.

## Galeria

As sete fotografias usadas pela galeria estão na pasta `imagens`. Para trocar ou adicionar uma foto, coloque o arquivo nessa pasta e atualize a lista `fotos` em `script.js`. Use caminhos relativos para manter a compatibilidade com GitHub Pages.

Antes de publicar, confirme que você tem autorização para disponibilizar as imagens. O projeto é uma página independente de fã e não oficial.
