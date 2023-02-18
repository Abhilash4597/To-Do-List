'use strict';

const form = document.querySelector('#form');
const textInput = document.querySelector('#textInput');
const dateInput = document.querySelector('#dateInput');
const textarea = document.querySelector('#textarea');
const addBtn = document.getElementById('add');
const tasks = document.querySelector('#tasks');
const msg = document.querySelector('#msg');

// # Reseting the default behaviour of submit
form.addEventListener('submit', e => {
  e.preventDefault();
  handleClick();
});

// # Handling the error
textInput.addEventListener('click', () => {
  msg.textContent = '';
});

// # clicking on add btn function
function handleClick() {
  if (textInput.value) {
    storeData();
    // # IIFE function for addBtn of modal.
    addBtn.setAttribute('data-bs-dismiss', 'modal');
    addBtn.click();
    (() => {
      addBtn.setAttribute('data-bs-dismiss', '');
    })();
  } else {
    msg.textContent = "Title can't be Empty";
    console.log(false);
  }
}

// # storing the input data.
let data = [];
function storeData() {
  data.push({
    title: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  localStorage.setItem('data', JSON.stringify(data));

  showData();
}

// # showing the input data.
function showData() {
  tasks.innerHTML = '';
  data.map((item, index) => {
    tasks.innerHTML += `<div id=${index}>
        <span class="fw-bold">${item.title}</span>
        <span class="small text-secondary">${item.date}</span>
        <p>${item.description}</p>

        <span class="options">
          <i onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
          <i onClick="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
          <i class="fa-solid fa-stopwatch"></i>
        </span>
      </div>`;
  });

  reset();
}

// # Deleting Task
function deleteTask(e) {
  e.parentElement.parentElement.remove();

  // #deleting the task from localstorage also.
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem('data', JSON.stringify(data));
}

// # Editing Task
function editTask(e) {
  let task = e.parentElement.parentElement;

  textInput.value = task.children[0].innerText;
  dateInput.value = task.children[1].innerText;
  textarea.value = task.children[2].innerText;

  deleteTask(e);
}

// # Resetting the modal
function reset() {
  textInput.value = '';
  dateInput.value = '';
  textarea.value = '';
}

// # IIFE function for getting the item from local storage.
(() => {
  data = JSON.parse(localStorage.getItem('data')) || [];
  showData();
})();

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
