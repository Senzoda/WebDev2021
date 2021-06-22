
// Selectors
const todoInput = document.querySelector('#todo')
const firstCardBody = document.querySelectorAll('.card-body')[0]
const secondCardBody = document.querySelectorAll('.card-body')[1]
const listGroup = document.querySelector('.list-group')


// Event listeners
firstCardBody.addEventListener('click', addTodo)
secondCardBody.addEventListener('click',removeTodo)


// delete functions

function removeTodo(event){
    
    event.preventDefault();
    
    if(event.target.id == "clear-todos") {
        console.log('you have cleared all todos')
        listGroup.innerHTML=" ";
    }

    if(event.target.className=="fa fa-remove"){
        console.log(event.target.parentElement.parentElement)
        event.target.parentElement.parentElement.remove();
    }
}


// create & append a todo element

const generator = t => document.createElement(t)

const createTodo = (title) => {
    let li = generator('li')
    li.className = "list-group-item d-flex justify-content-between"
    let todoTitle = document.createTextNode(title)
    li.appendChild(todoTitle)

    let a = generator('a')
    a.href="#"
    a.className = "delete-item"

    let i = generator('i')
    i.className = "fa fa-remove"

    a.appendChild(i)
    li.appendChild(a)

    return li

}


// add a todo

function addTodo(event) {
    event.preventDefault();
    if (event.target.className == "btn btn-danger") {
  //      console.log('added todo')
        listGroup.appendChild(createTodo(todoInput.value))
    }
}