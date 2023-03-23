//To capture user input, you can use the built-in prompt() method, like this:
let answer = prompt('What is your name?');

//you can output the typed-in information on the screen, as an <h1> HTML element.
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

//You can code a script which will take an input from an HTML form and display the text that a user types in on the screen.

//Here's how this is done.

//You'll begin by coding out a "test solution" to the task at hand:

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

//The next thing that you need to do is: set up an event listener. The event you're listening for is the change event.
// In this case, the change event will fire after you've typed into the input and pressed the ENTER key.

input.addEventListener('change', function() {
    h1.innerText = input.value
})