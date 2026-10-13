document.documentElement.classList.add("js");

const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu-principal");

menuToggle.addEventListener("click", () => {
  const aberto = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.querySelector(".sr-only").textContent = aberto ? "Fechar menu" : "Abrir menu";
  menu.classList.toggle("aberto", aberto);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector(".sr-only").textContent = "Abrir menu";
    menu.classList.remove("aberto");
  });
});

const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", () => {
  const temaClaro = document.body.classList.toggle("claro");
  botaoTema.setAttribute("aria-pressed", String(temaClaro));
  botaoTema.setAttribute(
    "aria-label",
    temaClaro ? "Ativar tema escuro" : "Ativar tema claro",
  );
});

const musicasEscolhidas = new Set();
const listaElemento = document.querySelector("#lista");

document.querySelectorAll(".adicionar").forEach((botao) => {
  botao.addEventListener("click", () => {
    const musica = botao.closest(".cartao-musica").querySelector("h3").textContent;
    const adicionada = musicasEscolhidas.has(musica);

    if (adicionada) {
      musicasEscolhidas.delete(musica);
    } else {
      musicasEscolhidas.add(musica);
    }

    botao.setAttribute("aria-pressed", String(!adicionada));
    botao.textContent = adicionada ? "+ Minha lista" : "✓ Na minha lista";

    if (musicasEscolhidas.size > 0) {
      listaElemento.textContent = `Sua seleção (${musicasEscolhidas.size}): ${Array.from(musicasEscolhidas).join(", ")}.`;
    } else {
      listaElemento.textContent = "Sua lista ainda está vazia. Escolha uma música para começar.";
    }
  });
});

const perguntasQuiz = [
  {
    pergunta: "Qual é o nome completo de Luan Santana?",
    opcoes: ["Luan Rafael Domingos Santana", "Luan Roberto Silva Santana", "Luiz Rafael Domingos Santos"],
    correta: 0,
  },
  {
    pergunta: "Em qual cidade Luan Santana nasceu?",
    opcoes: ["Goiânia", "Campo Grande", "Cuiabá"],
    correta: 1,
  },
  {
    pergunta: "Em qual estado fica a cidade natal dele?",
    opcoes: ["Mato Grosso do Sul", "Minas Gerais", "Paraná"],
    correta: 0,
  },
  {
    pergunta: "Em que país Luan Santana nasceu?",
    opcoes: ["Portugal", "Brasil", "Argentina"],
    correta: 1,
  },
  {
    pergunta: "Em que dia do mês ele nasceu?",
    opcoes: ["13", "3", "30"],
    correta: 0,
  },
  {
    pergunta: "Em que mês Luan Santana nasceu?",
    opcoes: ["Janeiro", "Março", "Setembro"],
    correta: 1,
  },
  {
    pergunta: "Em que ano Luan Santana nasceu?",
    opcoes: ["1989", "1991", "1995"],
    correta: 1,
  },
  {
    pergunta: "Qual estilo musical é mais associado a Luan Santana?",
    opcoes: ["Sertanejo", "Reggae", "Funk"],
    correta: 0,
  },
  {
    pergunta: "Qual influência musical também aparece no trabalho dele?",
    opcoes: ["Pop", "Ópera", "Música celta"],
    correta: 0,
  },
  {
    pergunta: "Qual destas músicas está entre as conhecidas no site?",
    opcoes: ["Te Esperando", "Evidências", "Asa Branca"],
    correta: 0,
  },
  {
    pergunta: "Qual destas músicas de Luan Santana está listada no site?",
    opcoes: ["Morena", "Anna Júlia", "Garota de Ipanema"],
    correta: 0,
  },
  {
    pergunta: "Complete o título de uma música dele: “Quando a Bad ___”.",
    opcoes: ["Bater", "Passar", "Chegar"],
    correta: 0,
  },
  {
    pergunta: "Qual é o título completo de uma das músicas listadas no site?",
    opcoes: ["Tudo Que Você Quiser", "Tudo Que Você Perdeu", "Tudo Que Eu Sonhei"],
    correta: 0,
  },
  {
    pergunta: "Qual destas também é uma música conhecida de Luan Santana?",
    opcoes: ["Meteoro", "Velha Infância", "Trem-Bala"],
    correta: 0,
  },
  {
    pergunta: "Qual destas músicas é interpretada por Luan Santana?",
    opcoes: ["Escreve Aí", "O Leãozinho", "Aquarela"],
    correta: 0,
  },
  {
    pergunta: "Qual destas opções é uma música de Luan Santana?",
    opcoes: ["Te Vivo", "Faroeste Caboclo", "Lanterna dos Afogados"],
    correta: 0,
  },
  {
    pergunta: "Qual destas músicas faz parte do repertório de Luan Santana?",
    opcoes: ["Cê Topa", "Meu Erro", "Tempo Perdido"],
    correta: 0,
  },
  {
    pergunta: "Qual destas é uma música de Luan Santana?",
    opcoes: ["Amar Não é Pecado", "Pais e Filhos", "Só Hoje"],
    correta: 0,
  },
  {
    pergunta: "Luan Santana é conhecido principalmente como...",
    opcoes: ["Cantor", "Ator de novelas", "Jogador de futebol"],
    correta: 0,
  },
  {
    pergunta: "Qual sigla identifica o estado de Mato Grosso do Sul?",
    opcoes: ["MS", "MG", "MT"],
    correta: 0,
  },
];

const inicioQuiz = document.querySelector("#quiz-inicio");
const painelPergunta = document.querySelector("#quiz-pergunta");
const painelResultado = document.querySelector("#resultado-quiz");
const textoPergunta = document.querySelector("#texto-pergunta");
const progressoQuiz = document.querySelector("#progresso-quiz");
const barraQuiz = document.querySelector("#barra-quiz");
const opcoesQuiz = document.querySelector("#opcoes-quiz");
const resumoQuiz = document.querySelector("#resumo-quiz");
let perguntaAtual = 0;
let acertosQuiz = 0;

function mostrarPergunta() {
  const item = perguntasQuiz[perguntaAtual];
  progressoQuiz.textContent = `PERGUNTA ${perguntaAtual + 1} DE ${perguntasQuiz.length}`;
  barraQuiz.value = perguntaAtual + 1;
  textoPergunta.textContent = item.pergunta;
  opcoesQuiz.replaceChildren();

  item.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "resposta-quiz";
    botao.textContent = opcao;
    botao.addEventListener("click", () => {
      if (indice === item.correta) {
        acertosQuiz += 1;
      }

      perguntaAtual += 1;

      if (perguntaAtual < perguntasQuiz.length) {
        mostrarPergunta();
      } else {
        mostrarResultado();
      }
    });
    opcoesQuiz.append(botao);
  });

  textoPergunta.focus();
}

function iniciarQuiz() {
  perguntaAtual = 0;
  acertosQuiz = 0;
  inicioQuiz.hidden = true;
  painelResultado.hidden = true;
  painelPergunta.hidden = false;
  mostrarPergunta();
}

function mostrarResultado() {
  painelPergunta.hidden = true;
  painelResultado.hidden = false;
  const erros = perguntasQuiz.length - acertosQuiz;
  resumoQuiz.textContent = `Você acertou ${acertosQuiz} e errou ${erros} de ${perguntasQuiz.length} perguntas.`;
  document.querySelector("#refazer-quiz").focus();
}

document.querySelector("#iniciar-quiz").addEventListener("click", iniciarQuiz);
document.querySelector("#refazer-quiz").addEventListener("click", iniciarQuiz);

const fotos = [
  "imagens/luan.jpg",
  "imagens/ab6761610000e5eb28a25297f5580906f6be7b79.jpg",
  "imagens/ab67616d0000b2738cbe01d862255994580e755e.jpg",
  "imagens/images.jpg",
  "imagens/Luan-Santana.webp",
  "imagens/navio-luan-santana-saiba-tudo-sobre-atracoes-especiais-valores-e-o-que-o-luxuoso-cruzeiro-oferece.webp",
  "imagens/whatsapp-image-2025-10-15-at-104701.jpg",
];
const fotoArtista = document.querySelector("#foto-artista");
const fotoContador = document.querySelector("#foto-contador");
const botaoTrocarFoto = document.querySelector("#trocar-foto");
const botaoAlternancia = document.querySelector("#alternancia-fotos");
const prefereMovimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
let fotoAtual = 0;
let temporizadorFoto;
let alternanciaAtiva = !prefereMovimentoReduzido.matches;

function mostrarFoto(indice) {
  fotoAtual = (indice + fotos.length) % fotos.length;
  fotoArtista.src = fotos[fotoAtual];
  fotoContador.textContent = `${String(fotoAtual + 1).padStart(2, "0")} / ${String(fotos.length).padStart(2, "0")}`;
}

function reiniciarTemporizadorFoto() {
  window.clearTimeout(temporizadorFoto);

  if (alternanciaAtiva) {
    temporizadorFoto = window.setTimeout(() => {
      mostrarFoto(fotoAtual + 1);
      reiniciarTemporizadorFoto();
    }, 60_000);
  }
}

function atualizarAlternancia() {
  botaoAlternancia.setAttribute("aria-pressed", String(alternanciaAtiva));
  botaoAlternancia.textContent = alternanciaAtiva
    ? "Pausar troca automática"
    : "Ativar troca automática";
  reiniciarTemporizadorFoto();
}

function avancarFoto() {
  mostrarFoto(fotoAtual + 1);
  reiniciarTemporizadorFoto();
}

botaoTrocarFoto.addEventListener("click", avancarFoto);
document.querySelector("#foto-anterior").addEventListener("click", () => {
  mostrarFoto(fotoAtual - 1);
  reiniciarTemporizadorFoto();
});
document.querySelector("#foto-proxima").addEventListener("click", avancarFoto);
botaoAlternancia.addEventListener("click", () => {
  alternanciaAtiva = !alternanciaAtiva;
  atualizarAlternancia();
});
prefereMovimentoReduzido.addEventListener("change", (evento) => {
  if (evento.matches) {
    alternanciaAtiva = false;
    atualizarAlternancia();
  }
});
fotoArtista.addEventListener("error", () => {
  fotoContador.textContent = "Não foi possível carregar esta foto.";
});
atualizarAlternancia();

const elementosRevelados = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && !prefereMovimentoReduzido.matches) {
  const observador = new IntersectionObserver((entradas, instancia) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        instancia.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  elementosRevelados.forEach((elemento) => observador.observe(elemento));
} else {
  elementosRevelados.forEach((elemento) => elemento.classList.add("visivel"));
}
