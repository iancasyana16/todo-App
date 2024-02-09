const inputBox = document.getElementById('input-box');
const task = document.getElementById('task');
const error = document.getElementById('error');

function addTask() {
    if (inputBox.value === '') {
        error.style.display = 'block';
        inputBox.value = '';
    } else {
        error.style.display = 'none';
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        task.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'x';
        li.appendChild(span);
    }
    inputBox.value = '';
    save();
    location.reload();
}

task.addEventListener("click", function check(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        save();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        save();
    }
}, false);

function save() {
    localStorage.setItem("data", task.innerHTML);
}

function get() {
    task.innerHTML = localStorage.getItem("data");
}

get();