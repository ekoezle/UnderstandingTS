const userName = 'Ich';
let testVar: string = 'Test';


const button = document.querySelector('#test-button') as HTMLButtonElement;

button.addEventListener('click', () => {
    console.log('Button clicked');
}); 

const map = new Map();