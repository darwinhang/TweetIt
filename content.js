// script that allows the extension to interact with web pages
// ensure script is loaded
console.log("what");

// add tooltip, may need to float it
function createTooltip(coordinates, parentEl) {
	var newDiv = document.createElement('div');
	newDiv.style.backgroundColor = 'blue';
	newDiv.style.height = '30px';
	newDiv.style.width = '30px';
	newDiv.style.top = coordinates.bottom + 'px';
	newDiv.style.left = coordinates.left + 'px';
	newDiv.style.zIndex = 30;
	newDiv.setAttribute('title', 'what up?');
	//newDiv.style.cssFloat = 'left';
	newDiv.style.position = 'absolute';

	parentEl.appendChild(newDiv);
	console.log('what up')

}

// get the important coordinates
function getCoords(rangeObject) {
	var what = rangeObject.getBoundingClientRect();

	return {
		"left": what.left,
		"bottom": what.bottom
	}
}

// on mouseup, if there is something selected, then it should be consoled out
function selected() {
	// need to collect the data and send it as a message
	var highlighted = window.getSelection();
	var highlightedText = highlighted.toString();
	var currentPage = window.location.href;
	if (highlightedText.length <= 0) {
		return;
	} 
	else {
		var objRange = highlighted.getRangeAt();
		console.log('quote:', highlightedText)
		console.log('page:', currentPage)
		console.log('position', objRange)
		console.log('bounding client', getCoords(objRange))

		createTooltip(getCoords(objRange), objRange.commonAncestorContainer);
	}
}

document.body.addEventListener('mouseup' , selected);