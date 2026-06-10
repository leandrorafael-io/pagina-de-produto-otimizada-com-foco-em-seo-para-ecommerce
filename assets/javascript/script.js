// Função de zoom na imagem principal
const principalimg = document.querySelector(".imagem-principal");

principalimg.addEventListener("mousemove", (e) => {

    const largura = principalimg.offsetWidth;
    const altura = principalimg.offsetHeight;

    const x = e.offsetX;
    const y = e.offsetY;

    const posicaoX = (x / largura) * 100;
    const posicaoY = (y / altura) * 100;

    principalimg.style.transformOrigin = `${posicaoX}% ${posicaoY}%`;
    principalimg.style.transform = "scale(2)";
});

principalimg.addEventListener("mouseleave", () => {
    principalimg.style.transform = "scale(1)";
});

// Função de troca de imagem ao clicar nas miniaturas
const miniaturas = document.querySelectorAll(".imagem-miniatura");
const principal = document.querySelector(".imagem-principal");

miniaturas.forEach(miniatura => {
    miniatura.addEventListener("click", () => {
        principal.src = miniatura.src;
    });
});

//Função que altera o ícone de coração no topo do site quando o cliente clica no botão de adicionar a lista de favoritos 
const btnLista = document.querySelector(".lista");
const favorito = document.querySelector(".favorito");

btnLista.addEventListener("click", () => {
    favorito.classList.toggle("fa-regular");
    favorito.classList.toggle("fa-solid");
    favorito.classList.toggle("ativo");
});

//Função que atualiza o contador do carrinho ao clicar no botão de adicionar ao carrinho 
const btnCarrinho = document.querySelector(".carrinho-botao");
const contadorCarrinho = document.querySelector(".contador-carrinho");

btnCarrinho.addEventListener("click", () => {
    let quantidade = parseInt(contadorCarrinho.textContent);
    quantidade++;
    contadorCarrinho.textContent = quantidade;
});

//Função que  faz navegar pelas políticas do site
const tabs = document.querySelectorAll(".tab-link");

tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove a cor ativa de todas as abas
        tabs.forEach(item => {
            item.classList.remove("ativo");
        });

        // Adiciona cor na aba clicada
        tab.classList.add("ativo");

        // Esconde todos os conteúdos
        document.querySelectorAll(".tab-content")
        .forEach(conteudo => {
            conteudo.classList.remove("ativo");
        });

        // Mostra o conteúdo correto
        const alvo = tab.dataset.tab;
        document.getElementById(alvo).classList.add("ativo");
    });
});

//Função para atualizar o ano do rodape
const ano = document.querySelector(".ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}