let x = null;
let y = null;

function onMouseUpdate(e) {
    console.log(e.pageX, e.pageY);
    
    x = e.pageX;
    y = e.pageY;
}

function getPositionX() {
    return x;
}

function getPositionY() {
    return y;
}

function createNewNote(positionX, positionY){
    let note = document.createElement("textarea");
    note.style.position = "fixed";
    note.style.left = positionX + "px";
    note.style.top = positionY + "px";
    note.style.width = "100px";
    note.style.height = "100px";
    return note;
}

document.addEventListener('contextmenu', onMouseUpdate, false);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        switch(request.action) {
            case "create-note": 
                document.body.appendChild(
                    createNewNote(
                        this.getPositionX(), 
                        this.getPositionY()
                    )
                );
                sendResponse(true);
                break;
            
            default:
                break;
        }
    }
)
