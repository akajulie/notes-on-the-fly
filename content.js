let count = 0;
let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

function createNewNote(id){
    let note = `
                <div class="meow" id=`+ id +`>
                    <header>
                        <button id="NOTF-delete-button">Delet Tis</button>
                        <button id="NOTF-minimize-button">Minimiz Tis</button>
                    </header>
                    <main>
                        <textarea id="NOTF-note-textarea" class="NOTF-note-textarea" cols="30" rows="10">
                            Hello there, General n00bie
                        </textarea>
                    </main>
                </div>
                `;
    return note;
}

function getNoteID() {
    return ids[count++];
}

function insertNoteIntoDOM(note) {
    document.body.insertAdjacentHTML( "beforebegin", note);
}

function meowTheNote(note) {
    setNotePosition(note, getPositionX(), getPositionY());
    addDeleteButtonFunctionality(note);
    addMinimizeButtonFunctionality(note);
}

function setNotePosition(note, positionX, positionY) {
    note.style.left = positionX + "px";
    note.style.top = positionY + "px";
}

function addDeleteButtonFunctionality(note) {
    function deleteNote(note) {
        note.remove();
    }
    note.querySelector("#NOTF-delete-button").onclick = function(){ deleteNote(note) };
}

function addMinimizeButtonFunctionality(note) {
    function minimizeNote(note) {
        note.querySelector("#NOTF-note-textarea").classList.toggle("OTF-minimize-note");
    }
    note.querySelector("#NOTF-minimize-button").onclick = function(){ minimizeNote(note) }
}

document.addEventListener('contextmenu', onMouseUpdate, false);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        switch(request.action) {
            case "create-note": {
                const id = getNoteID();
                insertNoteIntoDOM(createNewNote(id));

                let note = document.getElementById(id);
                meowTheNote(note);
                sendResponse(true);
                break;
            }

            default:
                break;
        }
    }
)
