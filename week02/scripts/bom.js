const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
//Create a delete button.
const deleteButton = document.createElement('button');

/*==============================================================================
========== Code for W02 Learning Activity: Document Object Model ============= 
================================= No longer needed =============================
Populate the li element variable's textContent or innerHTML with the input value.
li.textContent = input.value;
Populate the button textContent with a ❌
deleteButton.textContent = '❌';
Append the li element variable with the delete button.
li.append(deleteButton);
Append the li element variable to the unordered list in your HTML.
list.append(li);
===============================================================================*/

// DOMContentLoaded Event: Triggered when the HTML document has been completely parsed.
// Ensures that elements are available before the script runs.
document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    // Click Event: Add chapter to the list
    button.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            // Create an <li> element
            const li = document.createElement('li');
            li.textContent = input.value;

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';

            // Add an event to the button to remove the <li> element
            deleteButton.addEventListener('click', () => {
                list.removeChild(li);
            });

            // Append the button to the <li>, then append the <li> to the <ul>
            li.appendChild(deleteButton);
            list.appendChild(li);

            // Reset the input field
            input.value = '';
            input.focus();
        }
    });

    // Keyup Event: Triggered when a key is released
    input.addEventListener('keyup', function (event) {
        console.log(`Key released: ${event.key}`);
        // If Enter key is pressed, trigger the click event
        if (event.key === 'Enter') {
            button.click();
        }
    });

});
  