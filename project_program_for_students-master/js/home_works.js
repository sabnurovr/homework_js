const gmail_input = document.querySelector('#gmail_input')
const gmail_button = document.querySelector('#gmail_button')
const gmail_result = document.querySelector('#gmail_result')

const regExp = /@gmail.com$/

gmail_button.addEventListener('click', () => {
    if (regExp.test(gmail_input.value)) {
        gmail_result.innerHTML = 'Ok'
        gmail_result.style.color = 'green'
    } else {
        gmail_result.innerHTML = 'not ok'
        gmail_result.style.color = 'red'
    }
})

const child_block = document.querySelector('.child_block')

let positoin = 0

function move (){
    child_block.style.left = positoin+ 'px'
    positoin+=14
    if (positoin >= 450){
        return
    }
    setTimeout(move, 10)
}
move()

