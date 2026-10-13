# Estudo de viabilidade — landing page de fã do Luan Santana

**Pesquisa rápida realizada em:** 13 de outubro de 2026  
**Decisão:** viável como projeto estático, educativo e independente de fã.

## 1. Ideia e problema

### Ideia

Transformar o site existente em uma landing page de fã que reúna, em uma experiência visual única, uma apresentação do artista, uma seleção de músicas, curiosidades, uma galeria interativa e um quiz de 20 perguntas. O tema visual usa tons escuros e dourados, com foco em música e memória.

### Problema que a página resolve

Informações e conteúdos sobre um artista costumam estar espalhados por plataformas e páginas diferentes. Para uma pessoa fã ou visitante novo, isso dificulta encontrar rapidamente um resumo, explorar algumas músicas e participar de uma atividade relacionada ao artista.

### Público e proposta de valor

- **Público:** fãs, visitantes que querem conhecer o artista e avaliadores de um projeto escolar.
- **Proposta:** uma página leve, navegável no celular e sem cadastro, que combina apresentação, conteúdo editorial e pequenas interações.
- **Posicionamento:** projeto independente de fã; não representa o artista, sua equipe ou gravadora.

## 2. Pesquisa de mercado rápida

Pesquisa exploratória e qualitativa de páginas públicas de artistas brasileiros. É uma amostra pequena: não mede tráfego, conversão, audiência ou desempenho comercial.

| Referência | O que foi observado | Oportunidade para este projeto |
|---|---|---|
| [Site oficial do Luan Santana](https://www.luansantana.com.br/) | A página oficial identifica o artista e sua marca. A leitura automatizada disponibilizou conteúdo limitado, então não foi possível avaliar com segurança todas as seções ou funcionalidades. | Complementar a presença oficial com uma experiência de fã e deixar explícito que se trata de uma homenagem independente. |
| [Site oficial do Gusttavo Lima](https://gusttavolima.com.br/) | A página oficial apresenta identidade visual própria; o HTML público inclui recursos de marca e imagens. A análise não presume funcionalidades que não foram confirmadas visualmente. | Usar identidade visual consistente, mas concentrar a interação no conteúdo editorial do fã-site. |
| [Site oficial de Jorge & Mateus](https://www.jorgeemateus.com.br/) | A página reúne notícias de lançamentos e divulga uma loja oficial com produtos para fãs. | Diferenciar a LP com curiosidades, galeria e quiz; direcionar quem quiser informações oficiais ao site do próprio artista. |

### Síntese competitiva

As páginas oficiais funcionam como destinos de informação, divulgação e, em alguns casos, produtos. Esta LP não tenta substituir esses canais: oferece uma navegação curta e participativa para fãs. O diferencial proposto é unir galeria com troca manual e automática, seleção de músicas e quiz em uma só página, sem exigir conta.

## 3. Viabilidade técnica

### Arquitetura e hospedagem

- **Frontend:** HTML semântico, CSS responsivo e JavaScript puro.
- **Hospedagem:** GitHub Pages serve arquivos HTML, CSS e JavaScript diretamente de um repositório; não é necessário um servidor de aplicação para esta versão.
- **Publicação:** o workflow em `.github/workflows/pages.yml` prepara somente os arquivos públicos da página e publica ao receber alterações na branch `main`.
- **Dependências de build:** nenhuma; não há pacote npm, compilação ou framework.
- **Dados e privacidade:** o quiz e a lista de músicas funcionam no navegador e não enviam respostas para um servidor. A hospedagem não recebe formulário de contato nesta versão.
- **Compatibilidade:** imagens locais, caminhos relativos e HTML estático são adequados para URLs de projeto do GitHub Pages.

### Funcionalidades entregues

- Navegação por seções, com menu adaptado para celular.
- Galeria de sete imagens locais, navegação anterior/próxima, troca ao clicar na foto e alternância automática configurável.
- Preferência por movimento reduzido respeitada: a troca automática começa pausada para quem habilitou essa configuração no sistema.
- Lista interativa de músicas.
- Quiz de 20 perguntas, com resultado apresentado somente ao final e opção de jogar novamente.
- Revelação de conteúdo durante a rolagem e tema claro/escuro.
- Estados de foco visíveis, rótulos acessíveis, texto alternativo para imagem, anúncio de progresso/resultado e opção de pular para o conteúdo.

### Custos, limites e riscos

- **Custo de implementação e hospedagem:** a versão atual não precisa de banco de dados, API ou serviço pago. A disponibilidade e os limites dependem das condições vigentes do GitHub Pages e da conta/repositório.
- **Sem painel administrativo:** para alterar conteúdo, é necessário editar os arquivos e publicar uma nova versão.
- **Sem persistência ou métricas:** a lista e as respostas não ficam salvas depois que a página é fechada; não há analytics nem captura de dados.
- **Direitos de imagem e marca:** antes de tornar o repositório e o site públicos, confirme que tem permissão para publicar as fotografias e os demais materiais. Mantenha a indicação de página não oficial e não use a LP para sugerir patrocínio ou vínculo.
- **Privacidade da hospedagem:** a documentação do GitHub informa que requisições a páginas hospedadas podem registrar endereços IP para fins de segurança. A página não acrescenta rastreadores próprios.
- **Informações editoriais:** datas, títulos e descrições devem ser conferidos antes de cada atualização.

### Conclusão de viabilidade

**Tecnicamente viável para uma LP estática de fã e projeto educativo.** A implementação atende às interações propostas sem infraestrutura adicional. A publicação efetiva depende de criar ou escolher um repositório GitHub, enviar os arquivos para a branch `main`, habilitar GitHub Pages por GitHub Actions e ter autorização adequada para os materiais publicados.

## 4. Referências consultadas

- [GitHub Pages — o que é](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Pages — configurar uma fonte de publicação](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Luan Santana — site oficial](https://www.luansantana.com.br/)
- [Gusttavo Lima — site oficial](https://gusttavolima.com.br/)
- [Jorge & Mateus — site oficial](https://www.jorgeemateus.com.br/)
