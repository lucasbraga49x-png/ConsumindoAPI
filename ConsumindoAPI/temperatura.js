

async function ExibirValores() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=aracaju&appid=58971b62b0e7878e2729a2a0deb2b519');
        if (!response.ok) {
            throw new Error("Não é possível carregar o arquivo json");
        }
        const dados = await response.json();
        
    }
    catch (error) {
        console.error(error)
    }
}
