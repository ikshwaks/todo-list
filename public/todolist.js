//using jquery
$(function(){
    let newtodo=$('#newtodo')
    let addtodo=$('#addtodo')
    let todolist=$('#todolist')

    addtodo.click(function(){
        let todoval=newtodo.val()

        $.post(
            '/todos/',
            {task: todoval},
            function(data){
                todolist.empty()
                newtodo.val("")
                for(i of data){
                    todolist.append("<li>"+i.task+"</li>")
                }
            }
        )
    })
})