// select all buttons
const buttons = document.querySelectorAll('.btn');
const resultContainer = document.getElementById('resultContainer');

// function invoked when we click on a button
function onClick(event){
    // get the target button which was clicked
    let button = event.target;
    let id = button.id;
    // take a decision based on button clicked
    if(id === 'AC') {
        // clear the content
        resultContainer.innerText = '';
    } else if (id === 'DEL') {
        // keep everything except the last character
        let text = resultContainer.innerText;
        resultContainer.innerText = text.substr(0, text.length - 1);
    } else if (id === '=') {
        // check if expression is non-empty
        if (resultContainer.innerText === '')   return;
        // try to evaluate the expression
        try {
            // evalute the expression
            let result = eval(resultContainer.innerText);
            // update the result
            resultContainer.innerText = result;    
        } catch (error) {
            // in case of any error - we display invalid input
            alert('Invalid input');            
        }
    } else {
        // display the operator at screen
        resultContainer.innerText += id;
    }
}

// Add click Listener to the buttons
for(let i = 0; i < buttons.length; i++){
    let btn = buttons[i];
    btn.addEventListener('click', onClick);
}
 
// add key-press listener to 
document.addEventListener('keydown', (event) => {
    // check if there is a button corresponding to this key
    let btn = document.getElementById(event.key);
    // check if there is such a button
    if (btn)    btn.click();
    // check if it's enter
    else if (event.key === 'Enter')  
        document.getElementById('=').click();
    // check if it is backspace
    else if (event.key === 'Backspace')
        document.getElementById('DEL').click();
});