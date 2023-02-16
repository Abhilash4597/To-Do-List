'use strict';

const input = document.querySelector('#input');
const btn = document.querySelector('#button-addon2');


const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');
const alarmBtn = document.querySelector('.alarm');

btn.addEventListener('click', function () {
  let taskArr;
  let inputValue = input.value;
  let allTask = localStorage.getItem('task');
  if (allTask == null) {
    taskArr = [];
  } else {
    taskArr = JSON.parse(allTask);
  }
  taskArr.push(inputValue);
  localStorage.setItem('task', JSON.stringify(taskArr));
  displayTask()
});

function displayTask() {
  let taskArr;
  let allTask = localStorage.getItem('task');
  if (allTask == null) {
    taskArr = [];
  } else {
    taskArr = JSON.parse(allTask);
  }
  taskArr.push(inputValue);
  localStorage.setItem('task', JSON.stringify(taskArr));
  let html = '';
  const mainUl = document.querySelector('.list-group');
  taskArr.forEach(element => {
    html = `<li class="list-group-item list-group-item-dark line-height overFlow"><input class="form-check-input me-1"
    type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label" for="firstCheckbox">${element}</label>
      </li>
      <div class="margin">
      <button class="edit">Edit<i class="fa-solid fa-keyboard"></i></button>
      <button class="delete">Delete<i class="fa-regular fa-trash-can"></i></button>
        <button class="alarm">Alarm<i class="fa-solid fa-bell"></i></button>
        </div>`;
  });
  mainUl.insertAdjacentHTML('beforeend',html)
}


//   function () {
//   inputValue = input.value;
//   allTask = localStorage.getItem('task');
//   if (allTask == null) {
//     taskArr = [];
//   } else {
//     taskArr = JSON.parse(allTask);
//   }
//   taskArr.push(inputValue);
//   localStorage.setItem('task', JSON.stringify(taskArr));
//   // displayTask();
//   taskArr.forEach(element => {
//     html += `<ul class="list-group margin width border">
//     <li class="list-group-item list-group-item-dark line-height overFlow"><input class="form-check-input me-1" type="checkbox"
//         value="" id="firstCheckbox">
//       <label class="form-check-label" for="firstCheckbox">${element}</label>
//     </li>
//     <div class="margin">
//         <button class="edit">Edit<i class="fa-solid fa-keyboard"></i></button>
//         <button class="delete">Delete<i class="fa-regular fa-trash-can"></i></button>
//         <button class="alarm">Alarm<i class="fa-solid fa-bell"></i></button>
//       </div>

//   </ul>
// `;
//   mainUl.innerHTML = html;
//   });
// });

// function displayTask() {
//   inputValue = input.value;
//   allTask = localStorage.getItem('task');
//   if (allTask == null) {
//     taskArr = [];
//   } else {
//     taskArr = JSON.parse(allTask);
//   }
//   taskArr.push(inputValue);
//   localStorage.setItem('task', JSON.stringify(taskArr));
//   taskArr.forEach(element => {
//     html = `
//     <li class="list-group-item list-group-item-dark line-height overFlow"><input class="form-check-input me-1" type="checkbox"
//         value="" id="firstCheckbox">
//       <label class="form-check-label" for="firstCheckbox">${element}</label>
//     </li>
//     <div class="margin">
//         <button class="edit">Edit<i class="fa-solid fa-keyboard"></i></button>
//         <button class="delete">Delete<i class="fa-regular fa-trash-can"></i></button>
//         <button class="alarm">Alarm<i class="fa-solid fa-bell"></i></button>
//       </div>`;
//     });
//   mainUl.insertAdjacentHTML('beforeend', html);
//   input.value = '';
// }

// displayTask();
// btn.addEventListener('click', displayTask);
