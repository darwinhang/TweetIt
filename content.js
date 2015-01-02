// script that allows the extension to interact with web pages
function removeAnchor() {
	var found = false;
	do {
		var existingAnchor = document.getElementById('tweet-anchor');
		if (existingAnchor) {
			existingAnchor.remove();
			found = true;
		} 
		else {
			found = false;
		}
	} while (found);
	return false;
}

function selected(ev) {
	var highlighted = window.getSelection();
	var highlightedText = highlighted.toString();
	var currentPage = window.location.href;
	removeAnchor();

	if (highlightedText.length <= 0) {
		return false;
	} 
	else {
		var range = window.getSelection().getRangeAt(0);
		var tweetAnchor = document.createElement('span');
		tweetAnchor.setAttribute('id', 'tweet-anchor');
		tweetAnchor.addEventListener('click', tweetIt);
		range.insertNode(tweetAnchor);
		var what = range.getBoundingClientRect();
		var left = what.left, bottom = what.bottom;
		chrome.storage.local.set({'quote': highlightedText, 'url': currentPage});
	}
	return false;
}

// function to handle creating the Twitter web intent
// this funciton might actually be best done by a seperate pop-up
function tweetIt(ev) {
	var url = 'https://twitter.com/intent/tweet';

	// Add selected text
	chrome.storage.local.get(['quote', 'url'],  function(result) {
		var quoteText = encodeURIComponent(result.quote);
		var fullURI = url + '?text=' + quoteText + '&url=' + encodeURIComponent(result.url);
		window.open(fullURI)
	});

	// remove the previous span
	removeAnchor();

	ev.stopPropagation();
}

document.body.addEventListener('click' , selected);


