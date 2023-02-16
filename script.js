'use strict';

const form = document.querySelector('#form');
const textInput = document.querySelector('#textInput');
const dateInput = document.querySelector('#dateInput');
const textarea = document.querySelector('#textarea');
const addBtn = document.getElementById('add');
const tasks = document.querySelector('#tasks');
const msg = document.querySelector('#msg');

// # Reseting the default behaviour of submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleClick();
});

// # Handling the error
textInput.addEventListener('click', () => {
  msg.textContent = "";
})

// # clicking on add btn function
function handleClick() {
  if (textInput.value) {
    storeData();

    // # IIFE function for addBtn.
    (() => {
      addBtn.setAttribute('data-bs-dismiss', 'modal');
    })()

  } else {
    msg.textContent = "Title can't be Empty"
    console.log(false);
  }
}

// # storing the input data.
let data = {};
function storeData() {
  data['title'] = textInput.value;
  data['date'] = dateInput.value;
  data['description'] = textarea.value;
  showData();
}

// # showing the input data.
function showData() {
  tasks.innerHTML += `<div id=${1}>
        <span class="fw-bold">${data.title}</span>
        <span class="small text-secondary">${data.date}</span>
        <p>${data.description}</p>

        <span class="options">
          <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
          <i onClick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          <i class="fa-solid fa-stopwatch"></i>
        </span>
      </div>`;
  
  reset();
}

// # Resetting the modal
function reset() {
  textInput.value = '';
  dateInput.value = '';
  textarea.value = '';
}
























































// let form = document.getElementById('form');
// let textInput = document.getElementById('textInput');
// let dateInput = document.getElementById('dateInput');
// let textarea = document.getElementById('textarea');
// let msg = document.getElementById('msg');
// let tasks = document.getElementById('tasks');
// let add = document.getElementById('add');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   formValidation();
// });

// let formValidation = () => {
//   if (textInput.value === '') {
//     console.log('failure');
//     msg.innerHTML = 'Task cannot be blank';
//   } else {
//     console.log('success');
//     msg.innerHTML = '';
//     acceptData();
//     add.setAttribute('data-bs-dismiss', 'modal');
//     add.click();

//     (() => {
//       add.setAttribute('data-bs-dismiss', '');
//     })();
//   }
// };

// let data = [{}];

// let acceptData = () => {
//   data.push({
//     text: textInput.value,
//     date: dateInput.value,
//     description: textarea.value,
//   });

//   localStorage.setItem('data', JSON.stringify(data));

//   console.log(data);
//   createTasks();
// };

// let createTasks = () => {
//   tasks.innerHTML = '';
//   data.map((x, y) => {
//     return (tasks.innerHTML += `
//     <div id=${y}>
//           <span class="fw-bold">${x.text}</span>
//           <span class="small text-secondary">${x.date}</span>
//           <p>${x.description}</p>
  
//           <span class="options">
//             <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
//             <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
//             <i class="fa-solid fa-stopwatch"></i>
//           </span>
//         </div>
//     `);
//   });

//   resetForm();
// };

// let deleteTask = e => {
//   e.parentElement.parentElement.remove();
//   data.splice(e.parentElement.parentElement.id, 1);
//   localStorage.setItem('data', JSON.stringify(data));
//   console.log(data);
// };

// let editTask = e => {
//   let selectedTask = e.parentElement.parentElement;

//   textInput.value = selectedTask.children[0].innerHTML;
//   dateInput.value = selectedTask.children[1].innerHTML;
//   textarea.value = selectedTask.children[2].innerHTML;

//   deleteTask(e);
// };

// let resetForm = () => {
//   textInput.value = '';
//   dateInput.value = '';
//   textarea.value = '';
// };

// (() => {
//   data = JSON.parse(localStorage.getItem('data')) || [];
//   // console.log(data);
//   createTasks();
// })();

