// Thank you for using ScratchTools!
// This extension is independantly developed and updated by Scratch user MiniCoder11. You can find my profile here: 
// https://scratch.mit.edu/users/MiniCoder11/
// ScratchTools is not affiliated with scratch.mit.edu, MIT, or TurboWarp in any way.



window.console.log("ScratchTools - Successfully Loaded");
document.body.style.fontFamily = "Sofia Pro";
window.console.log("Styling Applied");

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
  
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild; 
}
  
function createEditorButtons() {
    var element = document.getElementsByClassName("menu-bar_menu-bar-item_oLDa-").item(6);
    element.insertAdjacentElement("afterend", createElementFromHTML('<div class="menu-bar_menu-bar-item_oLDa-" style="left: 4px"><span class="button_outlined-button_1bS__ menu-bar_menu-bar-button_3IDN0 community-button_community-button_2Lo_g" role="button"><div class="button_content_3jdgj"><span>Open in TurboWarp</span></div></span></div>'));
}

createEditorButtons();