document.addEventListener("DOMContentLoaded",main)

function main()
{
    document.getElementById("add-button").addEventListener("click",add);
    var task=document.getElementById("input-box");
    function add()
    {
        var ul=document.getElementById("list-container");
        if(task.value!='')
        {
            let li=document.createElement("li");
            ul.appendChild(li);
            li.innerHTML=task.value;
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
            task.value='';
        }
        saveData();
    }
    let listcontainer=document.getElementById("list-container");
    listcontainer.addEventListener("click",f);
    function f(event)
    {
        if(event.target.tagName === "SPAN")
        {
            event.target.parentElement.remove();
            task.value='';
        }
        if(event.target.tagName === "LI")
        {
            event.target.classList.toggle("checked");   
        }
        saveData();
    }
    function saveData()
    {
        localStorage.setItem("data",listcontainer.innerHTML);
    }
    function show()
    {
        listcontainer.innerHTML=localStorage.getItem("data");
    }
    show();
}