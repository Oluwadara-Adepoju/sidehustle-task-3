
let num = document.querySelector('.output');
let count = 0

function Reduce() {
    if (count == 0) {
        alert('Invalid! Number must not be less than zero!!')
    } else {
        count--
        num.innerText = count
    }
}

function Increase() {
    if (count == 50) {
        alert('Invalid! Number must not be greater than fifty!!')
    } else {
        count++
        num.innerText = count
    }
}
