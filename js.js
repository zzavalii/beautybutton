let vlad = document.getElementById('vlad')
let btn = document.getElementById('btn')
let text = document.getElementById('text')

btn.onclick = () => {
    console.log(btn.value);
    vlad.style.backgroundColor = text.value
}