function sendMessageToCreateNewNode(info, tab){
    chrome.tabs.executeScript( tab.id, {
        code: 
    });
}

chrome.runtime.onInstalled.addListener(_ => {
    chrome.contextMenus.create({
        "onclick": sendMessageToCreateNewNode,
        "title": __MSG_context_menu_title__,
        "contexts": ["all"]
    });
})
