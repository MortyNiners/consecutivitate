const squareVictor = document.querySelector('.squareVictor');
// squareVictor.style.width = '100px';
// squareVictor.style.height = '100px';
// squareVictor.style.backgroundColor = 'red';

squareVictor.ondblclick = ()=>{
    const squareAnghelina = document.createElement('div');
    squareAnghelina.style.width = '100px';
    squareAnghelina.style.height = '100px';
    squareAnghelina.style.backgroundColor = 'blue';
    squareAnghelina.textContent = "Anghelina";

    document.body.append(squareAnghelina);
}