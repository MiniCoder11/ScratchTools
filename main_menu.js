document.getElementById('mainSwitch').addEventListener("click", mainSwitch);
document.getElementById('toolsSwitch').addEventListener("click", toolsSwitch);
document.getElementById('editorSwitch').addEventListener("click", editorSwitch);
document.getElementById('preferencesSwitch').addEventListener("click", preferencesSwitch);

function mainSwitch() {
  openTab("main")
}
function toolsSwitch() {
	openTab("tools")
}
function editorSwitch() {
	openTab("editor")
}
function preferencesSwitch() {
  openTab("preferences")
}

function openTab(tabName) {
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//const turboWarpButton = '<div class="menu-bar_menu-bar-item_oLDa-"><span class="button_outlined-button_1bS__ menu-bar_menu-bar-button_3IDN0 community-button_community-button_2Lo_g" role="button"><div class="button_content_3jdgj"><span>Open in TurboWarp</span></div></span></div>'
//var element = document.getElementsByClassName("divider_divider_1_Adi")
//element.appenChild(turboWarpButton)
