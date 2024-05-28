(function() {
    const widgetContainer = document.getElementById('translator-widget');

    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.placeholder = 'Digite o texto aqui...';

    const translateButton = document.createElement('button');
    translateButton.textContent = 'Traduzir';

    const outputContainer = document.createElement('div');
    outputContainer.id = 'output';

    translateButton.onclick = function() {
        const text = inputBox.value;
        fetch('https://seuservidor.com/api/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text })
        })
        .then(response => response.json())
        .then(data => {
            // Renderize o sinal de Libras no outputContainer
            outputContainer.textContent = data.translation;
        });
    };

    widgetContainer.appendChild(inputBox);
    widgetContainer.appendChild(translateButton);
    widgetContainer.appendChild(outputContainer);
})();