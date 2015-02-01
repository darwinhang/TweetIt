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

function limitQuote(quote) {
	if (quote.length >= 100) {
		var newQuote =  quote.slice(0, 97);
		return newQuote + '...'
	}
	return quote;
}


function tweetIt(ev) {
	var url = 'https://twitter.com/intent/tweet';

	// Add selected text
	chrome.storage.local.get(['quote', 'url'],  function(result) {
		// looks like the escape double quotes are being converted back into the strings in the web intent url
		var quoteText = encodeURIComponent('"' + limitQuote(result.quote) + '"');
		var fullURI = url + '?text=' + quoteText + '&url=' + encodeURIComponent(result.url);
		window.open(fullURI);
	});

	// remove the previous span
	removeAnchor();

	ev.stopPropagation();
}

document.body.addEventListener('click' , selected);


