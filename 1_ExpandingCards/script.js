const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        disableClass()
        panel.classList.add('active')
    })
})

function disableClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}