function doClick(e) {
    alert($.label.text);
}

function doClickInbox(e) {
   
   var window = Alloy.createController("settings");
   window.getView().open();
}

$.index.open();
