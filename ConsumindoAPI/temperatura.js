
const inputKey = document.getElementById('chave')
const inputCidade = document.getElementById('nomecidade')
async function ExibirValores() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCidade.value}&appid=${inputKey.value}&units=metric&lang=pt_br`);
        if (!response.ok) {
            throw new Error("Não é possível carregar o arquivo json");
        }
        const dados = await response.json();

        document.getElementById('temperaturaMAX').value = `${dados.main.temp_max.toFixed(1)}°C`
        document.getElementById('temperaturaMIN').value = `${dados.main.temp_min.toFixed(1)}°C`
        document.getElementById('speedVento').value = `${dados.wind.speed.toFixed(1)} m/s`
    }   
    catch (error) {
        console.error(error)
    }
}
