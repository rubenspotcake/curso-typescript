"use strict";
class ToDoApp {
    constructor(taskList) {
        this.tasks = [];
        this.nextId = 0;
        this.taskList = taskList;
    }
    add(titulo) {
        const task = { id: this.nextId++, titulo };
        this.tasks.push(task);
        this.render();
    }
    remove(id) {
        this.tasks = this.tasks.filter(item => item.id != id);
        this.render();
    }
    render() {
        this.taskList.innerHTML = "";
        this.tasks.forEach(item => {
            const li = document.createElement("li");
            li.className = "flex border-solid border-[1px] rounded w-full justify-between p-2 items-center";
            const title = document.createElement("p");
            title.textContent = item.titulo;
            li.appendChild(title);
            const button = document.createElement("button");
            button.className = "bg-slate-700 text-white rounded-r-lg px-1 py-2 text-sm";
            button.textContent = "Apagar";
            li.appendChild(button);
            this.taskList.appendChild(li);
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("listaTarefa");
    const taskNew = document.getElementById("novaTarefa");
    const buttonAdd = document.getElementById("adicionaTarefa");
    const app = new ToDoApp(taskList);
    buttonAdd.addEventListener("click", () => {
        const title = taskNew.value.trim();
        if (title) {
            app.add(title);
            taskNew.value = "";
        }
    });
});
