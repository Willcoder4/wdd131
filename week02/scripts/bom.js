const input = querySelector("#favchap");
const button = querySelector("button");
const list = querySelector("#list");

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌'
li.append(deleteButton);

list.append(li);