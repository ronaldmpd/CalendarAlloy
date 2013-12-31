function Controller() {
    function doClickInbox() {
        var window = Alloy.createController("settings");
        window.getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.ImageViewHeader = Ti.UI.createImageView({
        width: "100%",
        height: Ti.UI.SIZE,
        image: "/images/header.png",
        top: 0,
        id: "ImageViewHeader"
    });
    $.__views.index.add($.__views.ImageViewHeader);
    $.__views.labelCalendarsTitle = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000000",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        alingText: "center",
        top: 12,
        text: "Calendars",
        id: "labelCalendarsTitle"
    });
    $.__views.index.add($.__views.labelCalendarsTitle);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.labelToday = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#F7544F",
        bottom: 12,
        left: 10,
        text: "Today",
        id: "labelToday"
    });
    $.__views.index.add($.__views.labelToday);
    $.__views.labelCalendars = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#F7544F",
        bottom: 12,
        alingText: "center",
        text: "Calendars",
        id: "labelCalendars"
    });
    $.__views.index.add($.__views.labelCalendars);
    $.__views.labelInbox = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#F7544F",
        bottom: 12,
        right: 10,
        text: "Inbox",
        id: "labelInbox"
    });
    $.__views.index.add($.__views.labelInbox);
    doClickInbox ? $.__views.labelInbox.addEventListener("click", doClickInbox) : __defers["$.__views.labelInbox!click!doClickInbox"] = true;
    $.__views.ImageViewFooter = Ti.UI.createImageView({
        width: "100%",
        image: "/images/footer.png",
        bottom: 0,
        zIndex: -1,
        id: "ImageViewFooter"
    });
    $.__views.index.add($.__views.ImageViewFooter);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.labelInbox!click!doClickInbox"] && $.__views.labelInbox.addEventListener("click", doClickInbox);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;