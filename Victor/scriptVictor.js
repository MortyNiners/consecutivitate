const divParinte = document.querySelector('.squareVictor')
const paragraf = document.createElement('p')
window.addEventListener('keydown',(event)=>{
    if(event.key === 'v')
    {
        divParinte.style.height = '100px'
        divParinte.style.width = '100px'
        divParinte.style.backgroundColor = 'black'
        divParinte.style.color = 'white'
        divParinte.append(paragraf)
        paragraf.textContent = "Victor are 20 ani si e tare bravo"
    }
})