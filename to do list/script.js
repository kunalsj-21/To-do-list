function addtask() {
    const newTask = document.createElement('li')
    const tasklist = document.getElementsById('tasklist')
    tasklist.appndChild(newTask)
    newTask.textContent = document.getElementsById('inputTask').value
}