(function () {
    const widgetContainer = document.getElementById('translator-widget');
    const startButtun = document.createElement('button');
    startButtun.textContent = 'start';

    const outputContainer = document.createElement('div');
    outputContainer.id = 'output';

    startButtun.onclick = function () {
        const url = 'https://neohubble.com'; // Substitua pela URL desejada

        fetch(url)
            .then(response => response.text())
            .then(data => {
                const outputContainer = document.getElementById('output');
                outputContainer.textContent = data;
            })
            .catch(error => {
                console.error('Erro ao buscar o site:', error);
            });
    };

    widgetContainer.appendChild(startButtun);
    widgetContainer.appendChild(outputContainer);
})();