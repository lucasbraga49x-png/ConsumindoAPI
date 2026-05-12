

async function ExibirValores() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
        if (!response.ok) {
            throw new Error("Não é possível carregar o arquivo json");
        }
        const dados = await response.json();

        const containerCotacao = document.querySelector('.cotacao-dolar');

        containerCotacao.innerHTML = "";

        const dado = dados.USDBRL;
        
        const valorConvertido = dados
        containerCotacao.innerHTML = `
             <h2>Alta: ${dado.high}</h2>
             <h3>Baixa: ${dado.low}</h3>
             <h1>Valor em reais<h1>
             <h3>Valor Atual: ${dado.bid}</h3>
        `;
    }
    catch (error) {
        console.error(error)
    }
}

ExibirValores()
