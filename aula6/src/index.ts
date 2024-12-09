interface Task{
  id : number
  titulo : string
}

class ToDoApp{
  private taskList : HTMLUListElement
  private tasks : Task[] = []
  private nextId : number = 0
  
  constructor (taskList : HTMLUListElement){
    this.taskList = taskList
  }
  public add(titulo: string): void{
    const task: Task = {id: this.nextId++, titulo}
    this.tasks.push(task)
    this.render()
  }
  public remove(id: number): void{
    this.tasks = this.tasks.filter((item) => item.id != id)
    this.render()
  }
  private render(): void {
    this.taskList.innerHTML = ""
    this.tasks.forEach(item => {
      const li = document.createElement("li")
      li.className = "flex border-solid border-[1px] rounded w-full justify-between p-2 items-center"
      const title = document.createElement("p")
      title.textContent = item.titulo
      li.appendChild(title)
      const button = document.createElement("button")
      button.className = "bg-slate-700 text-white rounded-r-lg px-1 py-2 text-sm"
      button.textContent = "Apagar"
      button.onclick = () => this.remove(item.id)
      li.appendChild(button)
      this.taskList.appendChild(li)
    })
  }
}

document.addEventListener("DOMContentLoaded", () => {
        const taskList = document.getElementById("listaTarefa") as HTMLUListElement
        const taskNew = document.getElementById("novaTarefa") as HTMLInputElement
        const buttonAdd = document.getElementById("adicionaTarefa") as HTMLButtonElement

        const app : ToDoApp = new ToDoApp(taskList)

        buttonAdd.addEventListener("click", () => {
          const title = taskNew.value.trim()
          if(title){
            app.add(title)
            taskNew.value = ""
          }
        })
})
