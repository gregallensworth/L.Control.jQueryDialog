/*
 * L.Control.jQueryDialog
 * A map control which opens a specified jQuery UI dialog. 
 * Great for Help buttons or similar popup-modal needs!
 */
L.Control.jQueryDialog = L.Control.extend({
    options: {
        // position         a Leaflet position for the control button, e.g. topleft. Optional; defaults to topright
        // dialogId         the DOM ID of the dialog DIV, without the # sign. Example: **dialog_help**, would connect to the modal with **id="dialog_help"**
        // tooltip          the tooltip text for the control
        // iconClass        additional CSS class/classesfor adding an icon, e.g. Example for FontAwesome: *fa fa-info-circle*
        position: 'topright',
        dialogId: null,
        tooltip: "",
        iconClass: ''
    },
    initialize: function(options) {
        L.setOptions(this, options);
        if (! options.dialogId) throw "L.Control.jQueryDialog: dialogId is required";

        // make sure that the stated modal (by DOM ID) is really real and really a Bootstrap modal
        // keep a reference to it for later
        this.modal = $('#' + this.options.dialogId );
        if ( ! this.modal.length )                 throw "L.Control.jQueryDialog: could not find #" + this.options.dialogId + "in the DOM";
    },
    onAdd: function (map) {
        // add a linkage to the map, since we'll be managing map layers
        this.map = map;
        this.active = false;

        // create our button: uses FontAwesome cuz that font is... awesome
        // assign this here control as a property of the visible DIV, so we can be more terse when writing click-handlers on that visible DIV
        this.controlDiv           = L.DomUtil.create('div', 'leaflet-control-jquerydialog leaflet-bar');
        this.controlDiv.control   = this;
        this.controlDiv.title     = this.options.tooltip;
        this.controlDiv.innerHTML = '<a href="#"><i class="' + this.options.iconClass + '"></i></a>';
        L.DomEvent
            .addListener(this.controlDiv, 'mousedown', L.DomEvent.stopPropagation)
            .addListener(this.controlDiv, 'click', L.DomEvent.stopPropagation)
            .addListener(this.controlDiv, 'click', L.DomEvent.preventDefault)
            .addListener(this.controlDiv, 'click', function () {
                this.control.handleClick();
            });

        // done!
        return this.controlDiv;
    },

    handleClick: function () {
        if (this.modal.dialog('isOpen')) {
            this.modal.dialog('close');
        }
        else {
            this.modal.dialog('open');
        }        
    }
});
