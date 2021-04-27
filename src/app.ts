const userName = 'Ich';
let testVar: string = 'Test';


const button = document.querySelector('#test-button')!;

function clickHandler(message: string) {
    console.log();
}

if(button) {
    button.addEventListener('click', clickHandler.bind(null, ''));
}

