function Controller() {
    function doClickDone() {
        $.settings.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.settings = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    $.__views.ImageViewHeader = Ti.UI.createImageView({
        width: "100%",
        height: Ti.UI.SIZE,
        image: "/images/header.png",
        top: 0,
        id: "ImageViewHeader"
    });
    $.__views.settings.add($.__views.ImageViewHeader);
    $.__views.labelSettingsTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        alingText: "center",
        top: 12,
        text: "Settings",
        id: "labelSettingsTitle"
    });
    $.__views.settings.add($.__views.labelSettingsTitle);
    $.__views.labelDone = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#F7544F",
        top: 12,
        right: 5,
        text: "Done",
        id: "labelDone"
    });
    $.__views.settings.add($.__views.labelDone);
    doClickDone ? $.__views.labelDone.addEventListener("click", doClickDone) : __defers["$.__views.labelDone!click!doClickDone"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.settings.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.settings.open();
    __defers["$.__views.labelDone!click!doClickDone"] && $.__views.labelDone.addEventListener("click", doClickDone);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;