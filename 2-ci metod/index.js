const inputData = document.getElementById("input_text");
const addButton = document.getElementById("plus_value");
const listValue = document.getElementById("list_value");
const deleteButton = document.getElementById("delete_btn");
let totalResult = document.getElementById("tasks_count");
let i=0;

addButton.addEventListener("click", addList);
deleteButton.addEventListener("click", clearAll);


function addList (){
    i++;
    inputValue=inputData.value;
    if(inputValue){
    divNode=document.createElement("div");
    divNode.classList.add("list_sections")
    liNode=document.createElement("li");
    txtNode=document.createTextNode(inputValue);
    liNode.appendChild(txtNode);
    divNode.appendChild(liNode);
    listValue.appendChild(divNode);


    spanNode=document.createElement("span");
    var deleteIcon=document.createElement("i");
    deleteIcon.classList.add("fa-solid");
    deleteIcon.classList.add("fa-trash");
    spanNode.appendChild(deleteIcon);
    divNode.appendChild(spanNode);
  

    spanNode.addEventListener('click', function(e) {
        i--;
        e.currentTarget.parentElement.remove();
        totalResult.textContent=i;
    })
  
    inputData.value = "";
    totalResult.textContent=i;
}

}

function clearAll() {

    while (listValue.hasChildNodes())
    listValue.removeChild(listValue.firstChild);
    i=0;
    totalResult.textContent=i;
}

