let tasks = [];
function getRandomColor() {
  const colors = [
    "#FF5733", "#33FF57", "#339BFF", "#F39C12",
    "#8E44AD", "#1ABC9C", "#FF33F6", "#2ECC71",
    "#FF6F61", "#2980B9", "#E67E22", "#16A085"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
/**
 * Adds Tasks in the ToDo list.
 */
function addtask(){
    const input = document.getElementById("tasksinput");
    const tasktext = input.value.trim();
    if( tasktext !==""){
        const task = {
            
            id: tasks.length+1,
            task:tasktext,
            status: 'Pending'
        }
        tasks.push(task);
        console.log(tasks)
    }
    else{
        alert("Please enter task")
    }
    show_task();
}
function show_task(){
   const list = document.getElementById("Tasks");
   list.innerHTML = "";

   tasks.forEach(task =>
    {
        const li = document.createElement("li");
        li.textContent = `${task.task} (${task.status})`;
        li.style.backgroundColor = getRandomColor();
        li.classList.add("libg");

        list.appendChild(li);
    })
        
}    

