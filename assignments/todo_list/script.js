var todo_input = document.querySelector("input[name='todo_input']");
var todo_btn = document.querySelector('button');

var count = 0;
function add_todo(){
    var para = document.createElement('p');
    var text_input = document.createTextNode(todo_input.value);
    para.appendChild(text_input);
    para.setAttribute('key',count);
    parent_element = document.querySelector('.todos');
    parent_element.appendChild(para);
    count+=1;
    para.addEventListener("click", deleteitem);
    function deleteitem(){
        parent_element.removeChild(para);
    }
}
todo_btn.addEventListener('click',add_todo);

var removeElement = document.querySelector('.todos');

function remove_task(e){
    //console.log(e);
    removeElement.removeChild(e.target);
}
// removeElement.addEventListener('click',function(e){
//     removeElement.removeChild(e.target);
// });

// function add_todo(){
    
//     if (input.value){
//     var para = document.createElement('p');
//     para.innerHTML = input.value;
//     para.appendChild(text_input);
//     para.setAttribute('key',count++);
//     parent_element = document.querySelector('.todos');
//     parent_element.appendChild(para);
//     para.addEventListener("click", deleteitem);
//     function deleteitem(){
//         parent_element.removeChild(para);
//     }
// }
// }
// todo_btn.addEventListener('click',add_todo);