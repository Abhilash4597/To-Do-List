'use strict';

const input = document.querySelector('#input');
const btn = document.querySelector('#button-addon2');
const mainUl = document.querySelector('.list-group');

const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');
const alarmBtn = document.querySelector('.alarm');
let inputValue, taskArr;

btn.addEventListener('click', function () {
  console.log('clicked')
  inputValue = input.value;
  let allTask = localStorage.getItem('task');
  if (allTask == null) {
    taskArr = []; 
  } else {
    taskArr = JSON.parse(allTask);
  }
  taskArr.push(inputValue);
  localStorage.setItem('task', JSON.stringify(taskArr));
})
