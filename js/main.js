const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    event.preventDefault();
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert theme-${type}" role="alert">`,
        `   <p>${message}</p>`,
        '   <button type="button" class="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('form')
if (alertTrigger) {
alertTrigger.addEventListener('submit', () => {
    appendAlert('Formulario enviado con éxito!', 'success')
})
}