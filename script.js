let increaseBtn = document.querySelector('.increase')
let decreaseBtn = document.getElementsByClassName('decrease')

let outputBox = document.querySelector('.output')
let num = Number(outputBox.textContent)

function Reducer(e){
        num--
        outputBox.textContent = num
        numberColor()
}

function Increaser(e){
        num = Number(outputBox.textContent)
        num++
        outputBox.textContent = num
        numberColor()

}
function numberColor(){
    if(num < 0){
        outputBox.style.color = 'red'
    }
    else if(num > 0){
        outputBox.style.color = 'rgb(15,234,17)'
    }else{
        outputBox.style.color = '#311'
    }
}

