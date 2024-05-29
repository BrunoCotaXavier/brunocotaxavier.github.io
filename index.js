(function() {
    const widgetContainer = document.getElementById('translator-widget');
    
    const startButton = document.createElement('button');
    startButton.textContent = 'Ativar Assistente';
    let isCapturing = false;

    const outputContainer = document.createElement('div');
    outputContainer.id = 'output';

    startButton.onclick = function(event) {
        isCapturing = !isCapturing;
        startButton.textContent = isCapturing ? 'Desativar Assistente' : 'Ativar Assistente';
        event.stopPropagation(); 
    };

    document.addEventListener('click', function(event) {
        if (isCapturing) {
            if (!widgetContainer.contains(event.target)) {
                const textContent = event.target.innerText || event.target.textContent;
                let ut = new SpeechSynthesisUtterance(textContent);
                window.speechSynthesis.speak(ut)
            }
        }
    }, true); 

    widgetContainer.appendChild(startButton);
    widgetContainer.appendChild(outputContainer);
})();