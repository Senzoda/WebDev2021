

const output = document.querySelector('.output')
const AlertMessage = document.querySelector('.alert')


document.addEventListener('DOMContentLoaded',function(e){
    let getLastNumber = sessionStorage.getItem('counter')
    output.innerHTML=`you clicked ${getLastNumber} times.`
})


document.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click',function(e){
        e.preventDefault();
      //  console.log(button.classList.contains('inc'))
        if(button.classList.contains('inc')){
            console.log('you clicked on the increment button')
            incrementMethod()
        }
        if(button.classList.contains('dec')){
            console.log('you clicked on the decrement button ')
            decreaseMethod()
        }
        if(button.classList.contains('res')){
            console.log('you clicked on the reset button')
            resetMethod()
        }
    })
})


function incrementMethod(){
    console.log('increased!!')
    let getNumber = Number(sessionStorage.getItem('counter'))+1
   // console.log(getNumber)
    sessionStorage.setItem('counter',getNumber)
    console.log(sessionStorage.getItem('counter'))
    output.innerHTML = `Clicked ${sessionStorage.getItem('counter')} times.`
}

function decreaseMethod(){
    console.log('decreased!')
    let getNumber = Number(sessionStorage.getItem('counter'))-1 // get last number and update it
    if(getNumber>=0){
        sessionStorage.setItem('counter',getNumber) // store updated number in session storage
        console.log(sessionStorage.getItem('counter'))
        output.innerHTML = `Clicked ${sessionStorage.getItem('counter')} times.`
    }else{
        
        AlertMessage.style.display='block'
        setTimeout(()=>AlertMessage.style.display='none',2000)
    }
}

function resetMethod(){
    console.log('reset')
    sessionStorage.setItem('counter',0)
    output.innerHTML = `Clicked ${sessionStorage.getItem('counter')} times.`
}