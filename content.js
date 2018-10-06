button.addEventListener("click", function() {
    alert(greeting + button.person_name + ".");
}, false);


function createNewNote(){
    let note = document.createElement("textarea");
    note.style.position = "fixed";
    note.style.left = 0;
    note.style.top = 0;
    note.style.width = "100px";
    note.style.height = "100px";
}