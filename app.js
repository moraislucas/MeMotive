function init(SeletorFrase, seletorAutor, seletorBtn) {
    // Selecionando elementos do DOM
    const frase = document.querySelector(SeletorFrase);
    const autor = document.querySelector(seletorAutor);
    const btn = document.querySelector(seletorBtn);
    const body = document.querySelector('body');

    // Tratativa de erro
    if (frase && autor && btn) {
        // Função Assincrona puxando a frase da API
        async function activeApp() {

            // Frase API
            const dadosResponse = await (fetch('https://api-motivaai.nandomoreira.dev/v1/phrases'));
            const dadosJSON = await (await dadosResponse).json();
            const aleatorio = dadosJSON[Math.floor(Math.random() * 200)];
            frase.innerText = aleatorio.quote;
            autor.innerText = aleatorio.author;


            return gradientColor();
        }

        async function gradientColor() {
            // Gradient Colors API

            // Faz um fetch na url
            const colorsResponse = await (fetch('http://uigradients.com/gradients.json'));
            // Aguarda o retorno do Fetch e transforma em JSON
            const colorsJSON = await (await colorsResponse).json();
            // Puxando as cores de forma aleatoria
            const aleatorioColors = colorsJSON[Math.floor(Math.random() * 334)].colors;

            // Altera a cor do body com gradient
            // body.style.backgroundImage = `linear-gradient(to right, ${aleatorioColors[1]}, ${aleatorioColors[0]}`

            //    Adiocionando apenas uma cor, sem gradient, teste
            body.style.background = aleatorioColors[0];

        }

        // Evento do botão
        btn.addEventListener('click', activeApp);

        // Ativando a função quando entra no site
        activeApp();
    }


}
// Chamando a função geral para inicar o codigo
init('.frase', '.autor', '.btn-novo');