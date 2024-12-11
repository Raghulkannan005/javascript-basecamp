let num = 1
    function appendNewElement(){
        const todoInputTitle = document.getElementById("todoTitle")
        const todoTitle = todoInputTitle.value

        const todoInputDesc = document.getElementById("todoDesc")
        const todoDesc = todoInputDesc.value

        const output = document.getElementById("output")

        const r = document.createElement('div')
        r.setAttribute('class','eachTodo')
        output.appendChild(r)

        r.innerHTML = `
        <div class= "title"> ${num}. TODO: ${todoTitle}</div>
        <div class= "desc"> Description: ${todoDesc}</div>
        `
        num++
        todoInputTitle.value = ''
        todoInputDesc.value= ''
    }