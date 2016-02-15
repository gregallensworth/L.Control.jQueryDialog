# L.Control.JQueryDialog

A simple Leaflet control to open a jQuery UI dialog.

Popupo dialogs, especially modal ones, are great for help panels, or for feedback forms, or for displaying a legend that doesn't need to take up screen space all the time. And if you want a Leaflet-styled button on your map, which would trigger this dialog... here's the plugin for you.

# Usage

For a quick start, see the *example* folder, or the live demo: http://gregallensworth.github.io/L.Control.jQueryDialog/

Assuming that you already have already have a Leaflet map running and a jQuery UI Dialog set up, the control runs like this:

```
new L.Control.jQueryDialog({
    dialogId: 'dialog-help',
    tooltip: "How to use this thing",
    iconClass: 'fa fa-question-circle'
}).addTo(MAP);
```

Parameters are:

* **dialogId** -- The DOM ID of the DIV element, e.g. what you put inside the id="" part. **Required**

* **tooltip** -- A tooltip to be displayed when the user hovers their mouse over the button. **Optional**

* **iconClass** -- Additional CSS class/classesfor adding an icon. jQuery UI doesn't come with a built-in set of icons, so you have to supply your own. Example if you use FontAwesome: *fa fa-info-circle*

# Icons and iconClass

jQuery UI doesn't come with a built-in set of icons, so you have to supply your own. Some very popular icon sets are:

* **FontAwesome** https://fortawesome.github.io/Font-Awesome/icons/ -- Your *iconClass* would include the *fa-* bits, for example: *fa fa-question-circle*

* **Bootstrap Glyphicons** http://getbootstrap.com/components/#glyphicons -- Your *iconClass* would include the *glyphicon-* bits, for example: *glyphicon glyphicon-search*
