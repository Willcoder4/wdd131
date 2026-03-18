// This script allows users to add their favorite book chapters to a list and remove them as needed. It also handles empty input by displaying an error message.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Adds functionality to the button to add a new chapter to the list when clicked
button.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);

        list.append(li);
        input.value = '';

        // Adds functionality to the delete button to remove the chapter from the list when clicked
        deleteButton.addEventListener('click', () => {
            li.remove();
            input.focus();
        })
    // Handles the case where the input is empty by displaying an error message for a short duration    
    } else {
            const errorMsg = document.createElement('p');
            errorMsg.textContent = "Please enter a chapter name.";
            errorMsg.style.color = 'red';
            document.body.append(errorMsg);
            
            setTimeout(() => {
                errorMsg.remove();
            }, 4000);
        }
    });