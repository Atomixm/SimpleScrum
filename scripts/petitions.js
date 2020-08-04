const API_URL = 'https://my-json-server.typicode.com/Atomixm/SimpleScrum/tasks'

axios.get(API_URL)
.then( resp => fillTasks(resp.data))
.catch(err => console.log(err))
.then()

function fillTasks (data){
    data.map(d=>{
        let newTask = document.createElement('article')
        let taskTitle = document.createElement('h3')
        taskTitle.innerText = d.title
        newTask.appendChild(taskTitle)
        
        let colum = document.getElementById('doneTasks')
        colum.appendChild(newTask)
    })
}