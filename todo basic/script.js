const input = document.querySelector('#input');
const postBtn = document.querySelector('.postBtn');
const posts = document.querySelector('#posts');
const msg = document.querySelector('#msg');

//# Removing the alert msg
input.addEventListener('click', () => {
  msg.innerHTML = '';
});

//# displaying the data after click
postBtn.addEventListener('click', e => {
  e.preventDefault();
  if (input.value) {
    storeData();
  } else {
    msg.innerHTML = 'Please Write Something';
  }
});

//# storing the data
let value = {};
function storeData() {
  value['text'] = input.value;
  displayPost();
}

//# displaying the data
function displayPost() {
  let html;
  html = `<div>
            <p>${value.text}</p>
            <span class="options">
              <i onclick="editPost(this)" class="fas fa-edit edit"></i>
              <i onclick="deletePost(this)" class="fas fa-trash-alt delete"></i>
            </span>
          </div>`;
  posts.insertAdjacentHTML('beforeend', html);
  input.value = '';
  input.focus();
}

//# deleting the data
function deletePost(e) {
  e.parentElement.parentElement.remove();
}

//# editing the post
function editPost(e) {
  input.value = e.parentElement.previousElementSibling.innerText;
  e.parentElement.parentElement.remove();
}
