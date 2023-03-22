//TODO:
//Todo: able to type a task into the input field.
//Todo: able to click some form of a submit button.
//Todo: see the task string that I provided appear in the DOM after the submit button is clicked

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  let button = document.getElementById('btn');
  let txt = document.getElementById('new-task-description')
  
  

  form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    
    let task = txt.value;
    newTask(task);

  })
  
  let newTask = (val) => {    
    let content = document.getElementById('tasks');
    let newTodo = document.createElement('p');
    let newBtn = document.createElement('button');

    newTodo.textContent = val + " "
    newBtn.textContent = 'X';
    newBtn.style = 'height: 15px; font-size: 10px; font-weight: bold; background: red; color: black; border-radius: 5px;'
    newTodo.style = 'width: 100px;'

    content.appendChild(newTodo);
    newTodo.appendChild(newBtn);

    form.reset();
    delTask(newBtn);
  }

  function delTask(btn){
    btn.addEventListener('click', ()=>{
      btn.parentNode.remove()
    })    
  }

});
