document.body.innerHTML = '<img src="Portfólio.png" alt="">'
doc = document.querySelector('body')
        doc.addEventListener('mousedown', alerta)
        doc.addEventListener('contextmenu', alerta)
        function alerta() {
            event.preventDefault();
        }

