window.onload = function() {
    const times = 100000;
    let html = '';
    for (let i = 0; i < times; i++) {
        html += `<div class="demo1">${i}</div>`
    }
    document.body.innerHTML = html;
    const aDiv = document.querySelectorAll('.demo1')
    Array.prototype.forEach.call(aDiv, (div, i) => {
        div.style.margin = i % 2 ? '10px' : 0;
      })
}