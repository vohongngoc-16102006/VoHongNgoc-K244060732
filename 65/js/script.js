function addNode() {
    const content = document.getElementById("content").value.trim();
    const position = parseInt(document.getElementById("addPos").value);
    if(content === ""){
        alert("Please enter content!");
        return;
    }
    const ul = document.getElementById("webNode");
    const newLi = document.createElement("li");
    newLi.textContent = content;
    const total = ul.children.length;
    if(
        isNaN(position) ||
        position > total + 1 ||
        position <= 0
    ){
        ul.appendChild(newLi);
    }
    else{
        ul.insertBefore(
            newLi,
            ul.children[position - 1]
        );
    }
    document.getElementById("content").value = "";
    document.getElementById("addPos").value = "";
}
function removeNode(){

    const position = parseInt(
        document.getElementById("removePos").value
    );
    const ul = document.getElementById("webNode")
    const total = ul.children.length;
    if(
        isNaN(position) ||
        position < 1 ||
        position > total
    ){
        alert("Invalid position!");
        return;
    }
    ul.removeChild(
        ul.children[position - 1]
    );
    document.getElementById("removePos").value = "";
}
function modifyNode(){
    const newContent =
        document.getElementById("newContent").value.trim();
    const position = parseInt(
        document.getElementById("modifyPos").value
    );
    const ul = document.getElementById("webNode");
    const total = ul.children.length;
    if(newContent === ""){
        alert("Please enter new content!");
        return;
    }
    if(
        isNaN(position) ||
        position < 1 ||
        position > total
    ){
        alert("Invalid position!");
        return;
    }
    const newLi = document.createElement("li");
    newLi.textContent = newContent;
    ul.replaceChild(
        newLi,
        ul.children[position - 1]
    );
    document.getElementById("newContent").value = "";
    document.getElementById("modifyPos").value = "";
}