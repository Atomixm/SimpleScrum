const API_URL = 'https://my-json-server.typicode.com/Atomixm/SimpleScrum/tasks'

axios.get(API_URL)
.then( resp => fillTasks(resp.data))
.catch(err => console.log(err))
.then()

function fillTasks (data){
    data.map(d=>{
        let newTask = document.createElement('article')
        newTask.classList.add('task')

        let taskTitle = document.createElement('h3')
        taskTitle.innerText = d.title

        let taskPerson = document.createElement('p')
        taskPerson.innerHTML = `<span>Responsable:</span> ${d.person}`

        let taskDeadline = document.createElement('p')
        taskDeadline.innerHTML = `<span>Plazo:</span> ${unixToDate(d.deadline)}`

        newTask.appendChild(taskTitle)
        newTask.appendChild(taskPerson)
        newTask.appendChild(taskDeadline)

        let columTodo = document.getElementById('todoTasks')
        let columInProgress = document.getElementById('inProgressTasks')
        let columDone = document.getElementById('doneTasks')
        
        if(d.state == 'to-do'){
            columTodo.appendChild(newTask)
        }
        if(d.state == 'in-progress'){
            columInProgress.appendChild(newTask)
        }
        if(d.state == 'done'){
            columDone.appendChild(newTask)
        }
    })
}