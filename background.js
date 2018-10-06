function onClickHandler(info, tab){
    if(info.menuItemId === "create_new_note"){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    action: "create-note"
                },
                function(response){
                    if(response){
                        console.log("The note has been created");
                    } else {
                        console.log("Something went wrong");
                    }
                }
            )
        })
    }
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.runtime.onInstalled.addListener(_ => {
    
    //Add "Add new note" option
    chrome.contextMenus.create({
        "id": "create_new_note",
        "title": "__MSG_context_menu_title__",
        "contexts": ["all"]
    });

})
