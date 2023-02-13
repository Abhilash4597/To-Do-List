'use strict';

const input = document.querySelector('#input');
const btn = document.querySelector('#button-addon2');
const mainUl = document.querySelector('.list-group');

const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');
const alarmBtn = document.querySelector('.alarm');
let taskArr, inputValue, allTask, html;

btn.addEventListener('click', function () {
  inputValue = input.value;
  allTask = localStorage.getItem('task');
  if (allTask == null) {
    taskArr = [];
  } else {
    taskArr = JSON.parse(allTask);
  }
  taskArr.push(inputValue);
  localStorage.setItem('task', JSON.stringify(taskArr));
  // displayTask();
  taskArr.forEach(element => {
    html += `<li class="list-group-item list-group-item-dark line-height"><input class="form-check-input me-1" type="checkbox"
        value="" id="firstCheckbox">
      <label class="form-check-label" for="firstCheckbox">${element}</label>
      <div>
        <button class="edit">Edit<i class="fa-solid fa-keyboard"></i></button>
        <button class="delete">Delete<i class="fa-regular fa-trash-can"></i></button>
        <button class="alarm">Alarm<i class="fa-solid fa-bell"></i></button>
      </div>
    </li>`;
  });
  mainUl.innerHTML = html;
});

// function displayTask() {
//   inputValue = input.value;
//   allTask = localStorage.getItem('task');
//   if (allTask == null) {
//     taskArr = [];
//   } else {
//     taskArr = JSON.parse(allTask);
//   }
//   taskArr.forEach(element => {
//     html += `<li class="list-group-item list-group-item-dark line-height"><input class="form-check-input me-1" type="checkbox"
//         value="" id="firstCheckbox">
//       <label class="form-check-label" for="firstCheckbox">${element}</label>
//       <div>
//         <button class="edit">Edit<i class="fa-solid fa-keyboard"></i></button>
//         <button class="delete">Delete<i class="fa-regular fa-trash-can"></i></button>
//         <button class="alarm">Alarm<i class="fa-solid fa-bell"></i></button>
//       </div>
//     </li>`;
//   });
//   mainUl.innerHTML = html;
// }
// displayTask();
