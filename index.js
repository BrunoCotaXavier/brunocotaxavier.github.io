(function() {
    // Verifica se o widget já foi inicializado para evitar a execução múltipla
    if (!window.translatorWidgetInitialized) {
        const widgetContainer = document.getElementById('translator-widget');

        const startButton = document.createElement('button');
        startButton.textContent = 'Ativar Captura de Texto';
        let isCapturing = false;

        const outputContainer = document.createElement('div');
        outputContainer.id = 'output';

        startButton.onclick = function(event) {
            isCapturing = !isCapturing;
            startButton.textContent = isCapturing ? 'Desativar Captura de Texto' : 'Ativar Captura de Texto';
            event.stopPropagation(); // Evita que o clique no botão ative a captura de texto
        };

        document.addEventListener('click', function(event) {
            if (isCapturing) {
                // Verifica se o clique foi dentro do widget para evitar capturar texto do próprio widget
                if (!widgetContainer.contains(event.target)) {
                    const textContent = event.target.innerText || event.target.textContent;
                    outputContainer.textContent = textContent;
                }
            }
        }, true); // Use captura para garantir que o evento seja capturado na fase de captura

        widgetContainer.appendChild(startButton);
        widgetContainer.appendChild(outputContainer);

        // Define uma variável global para indicar que o widget foi inicializado
        window.translatorWidgetInitialized = true;
    }
})();
