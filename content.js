// script that allows the extension to interact with web pages
// ensure script is loaded
console.log("tweet it loaded");

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
		// remove the previous span
		var existingAnchor = document.getElementById('tweetAnchor');
		if (existingAnchor) {
			existingAnchor.remove();
		}
		
		var range = window.getSelection().getRangeAt(0);
		var tweetAnchor = document.createElement('span');
		tweetAnchor.setAttribute('id', 'tweetAnchor');
		range.insertNode(tweetAnchor);
		var what = range.getBoundingClientRect();
		var left = what.left, bottom = what.bottom;
		console.log('quote:', highlightedText)
		console.log('page:', currentPage)
	}
}

document.body.addEventListener('mouseup' , selected);