async function ExibirTodosOsPaises() {
    try {

        const response = await fetch(
            "https://restcountries.com/v3.1/all?fields=name,flags,capital,population"
        );

        if (!response.ok) {
            throw new Error("Não foi possível carregar a lista de países");
        }

        const dados = await response.json();

        const campoCards = document.querySelector('.campo-cards');

        if (!campoCards) {
            console.error("A div '.campo-cards' não foi encontrada no HTML.");
            return;
        }

        let htmlAcumulado = "";

        dados.forEach(dado => {

            htmlAcumulado += `
            <div class="card">
                <img src="${dado.flags.svg}" 
                alt="Bandeira de ${dado.name.common}" 
                width="100">
                <h2>${dado.name.common}</h2>
                <p> Capital: ${dado.capital ? dado.capital[0] : "N/A"}</p>
                <p>População: ${dado.population.toLocaleString('pt-BR')}</p>
            </div>
            `;
        });

        campoCards.innerHTML = htmlAcumulado;

    } catch (error) {

        console.error("Erro ao carregar países:", error);

    }
}

ExibirTodosOsPaises();