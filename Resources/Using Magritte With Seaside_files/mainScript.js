Object.extend(Element, {
    maximize: function(element, height, width) {
        element = $(element);
        var bounds = Position.windowBounds();
	element.style.width = (bounds[0] - width) + "px";
	element.style.height = (bounds[1] - height) + "px";
	updateLightbox();
    }
});
