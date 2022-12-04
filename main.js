function toast({
    title = '', 
    message = '', 
    type = 'info', 
    duration = 3000
}) {
    const main = document.getElementById('toast')
    if(main) {
        const toast = document.createElement('div')

        //auto remove toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast)
        }, duration + 1000);

        //remove toast when click
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }

        const icons = {
            success: 'fa-circle-check',
            error: 'fa-circle-xmark',
            warning: 'fa-circle-exclamation'
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)

        toast.classList.add('toast',`toast--${type}`)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="fa ${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">${title}</div>
                <p class="toast__message">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa fa-xmark"></i>
            </div>
        `
        main.appendChild(toast)
    }
}
