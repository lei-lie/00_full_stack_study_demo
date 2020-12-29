const times = 100000
let html = ''
for(let i=0;i<times;i++) {
  html+= `<div>${i}</div>`
}
document.body.innerHTML += html
const aDiv = document.querySelectorAll('div')
Array.prototype.forEach.call(aDiv, (div, i) => {
  div.style.color = i % 2 ? 'red' : 'green';
})