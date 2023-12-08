//функция
const names = prompt('What is your name?', "name")
function showName(){
    let message = "Hello, "
    alert(`${message + names}!`)
}
showName()