//Binary Calculator

//Adding listener event for click on all operands and operators
let displayButton = document.getElementsByClassName('displayButton')

//We use Array for iterating over displayButton object, as document objects has no own iterator
Array.prototype.forEach.call(displayButton, function(element){
    element.addEventListener('click', function() {
        let resElement = document.getElementById('res')
        resElement.innerHTML = resElement.innerHTML + element.innerHTML
    })
})

//On equal button click
let eqlBtn = document.getElementById('btnEql')
eqlBtn.onclick = function(){
    let resElement = document.getElementById('res')
    let resElementInnerHTML = resElement.innerHTML
    let result;
    let regex = /(\+|\-|\*|\/)/g
    let operator = resElementInnerHTML.match(regex)
    if(operator[0] !== '/'){
        let regex = /\d+/g
        let operands = resElementInnerHTML.match(regex)
        let operand1 = parseInt(operands[0], 2)
        let operand2 = parseInt(operands[1], 2)
        result = eval(operand1.toString() + operator[0] + operand2.toString()).toString(2)
    }
    else{
        result = Math.floor(eval(resElementInnerHTML))
    }
    resElement.innerHTML = result
}

//On clear button click
let clrBtn = document.getElementById('btnClr')
clrBtn.onclick = function(){
    document.getElementById('res').innerHTML = ''
}


