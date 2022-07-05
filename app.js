const board = document.querySelector('#board')

const colors = ['DarkBlue', 'DarkGoldenRod', 'DarkCyan','DarkGrey', 'DarkGreen', 'DarkKhaki', 'Dark Magneta', 'DarkRed','DarkViolet']

const SQUARES_NUMBER = 900

for (let i=0; i <SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square') 
//    square.addEventListener('mouseover', ()=> setColor(square))
//    square.addEventListener('mouseleave', ()=> removeColor(square))
square.addEventListener('mouseover', setColor)
square.addEventListener('mouseleave', removeColor)
   board.append(square)
}


function setColor(event) { //element
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 8px ${color}`
}

function removeColor(event) { //element
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
    // const index = Math.floor(Math.random()*colors.length)
    // return colors[index]
    return colors [Math.floor(Math.random() * colors.length)]
}