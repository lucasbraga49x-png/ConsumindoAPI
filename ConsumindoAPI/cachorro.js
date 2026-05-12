

async function ExibirValores() {
    try {
        const response = await fetch('');
        if (!response.ok) {
            throw new Error("Não é possível carregar o arquivo json");
        }
        const dados = await response.json();
        const campoImagem = document.querySelector('.campo-imagem');

        campoImagem.innerHTML = `
            <img src="${dados.message}" alt="Cachoro" style="width: 300px; height: auto;">
        `;
    }
    catch (error) {
        console.error(error)
    }
}
