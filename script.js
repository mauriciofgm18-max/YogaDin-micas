// Arquivo JavaScript principal (opcional para a estrutura atual)

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página de verificação (Pressel) carregada com sucesso.");

    // Como as animações (fade, hover, pulsação) foram construídas com CSS 
    // e os links (redirecionamentos) estão diretamente no HTML (tag <a>), 
    // o JavaScript não era estritamente obrigatório para o seu funcionamento.

    // Deixar os redirecionamentos como puro HTML é a melhor prática quando 
    // se usa o script do UTMify, pois ele consegue ler a página e adicionar
    // os parâmetros UTM automaticamente em todos os links (href) sem problemas.

    /* 
    Se no futuro você quiser interceptar o clique para disparar algum evento 
    específico no Facebook Pixel antes de redirecionar, você pode fazer assim:
    
    const btnYes = document.querySelector('.btn-yes');
    btnYes.addEventListener('click', (e) => {
        // e.preventDefault();
        // fbq('track', 'Lead');
        // setTimeout(() => { window.location.href = btnYes.href; }, 300);
    });
    */
});
