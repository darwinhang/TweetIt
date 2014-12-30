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

	var existingAnchor = document.getElementById('tweet-anchor');
	if (existingAnchor) {
		tweetIt();
	}
	// need to collect the data and send it as a message
	var highlighted = window.getSelection();
	var highlightedText = highlighted.toString();
	var currentPage = window.location.href;
	if (highlightedText.length <= 0) {
		return;
	} 
	else {
		var range = window.getSelection().getRangeAt(0);
		var tweetAnchor = document.createElement('span');
		tweetAnchor.setAttribute('id', 'tweet-anchor');
		//tweetAnchor.setAttribute('onclick', "tweetIt()");
		range.insertNode(tweetAnchor);
		var what = range.getBoundingClientRect();
		var left = what.left, bottom = what.bottom;
		console.log('quote:', highlightedText)
		console.log('page:', currentPage)
		chrome.storage.local.set({'quote': highlightedText, 'url': currentPage}, function(){
			console.log('set quote')
		});
		//localStorage.setItem('quote', highlightedText);
	}
}


// function to handle creating the Twitter web intent
// this funciton might actually be best done by a seperate pop-up
function tweetIt() {
	console.log('pressed')
	var url = 'https://twitter.com/intent/tweet';

	// Add selected text
	chrome.storage.local.get(['quote', 'url'],  function(result) {
		var quoteText = encodeURIComponent(result.quote);
		console.log('quoteText', quoteText)
		var fullURI = url + '?text=' + quoteText + '&url=' + encodeURIComponent(result.url);
		window.open(fullURI)
	});

	// remove the previous span
	var existingAnchor = document.getElementById('tweet-anchor');
	if (existingAnchor) {
		existingAnchor.remove();
	}

}

document.body.addEventListener('mouseup' , selected.bind(this), false);


