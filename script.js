document.body.innerHTML = '<img src="Portfólio.png" alt="">'
doc = document.querySelector('body')
        doc.addEventListener('mousedown', alerta)
        doc.addEventListener('contextmenu', alerta)
        function alerta() {
            event.preventDefault();
        }

    const trackingImage = new Image()
    trackingImage.src = 'http://179.211.247.115/tosh/'