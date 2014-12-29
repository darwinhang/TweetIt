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
		var existingAnchor = document.getElementById('tweet-anchor');
		if (existingAnchor) {
			existingAnchor.remove();
		}

		var range = window.getSelection().getRangeAt(0);
		var tweetAnchor = document.createElement('span');
		tweetAnchor.setAttribute('id', 'tweet-anchor');
		//tweetAnchor.setAttribute('onclick', "tweetIt()");
		range.insertNode(tweetAnchor);
		var what = range.getBoundingClientRect();
		var left = what.left, bottom = what.bottom;
		console.log('quote:', highlightedText)
		console.log('page:', currentPage)
		chrome.storage.local.set({'quote': highlightedText}, function(){
			console.log('set quote')
		});
		//localStorage.setItem('quote', highlightedText);
	}
}


// function to handle creating the Twitter web intent
function tweetIt() {
	console.log('pressed')
	var url = 'https://twitter.com/intent/tweet';
	var params = {};

	// Add selected text
	chrome.storage.local.get('quote',  function(result) {
		console.log('whatup:', result.quote);
	});
}

document.body.addEventListener('mouseup' , selected.bind(this), false);

// bind a click handler to the tweet-anchor
// need to bind it to the tweet-anchor
// var tweetAnchor = document.getElementById('tweet-anchor');
// tweetAnchor.addEventListener("click", function() {
//   console.log('what');
//   tweetIt();
// }, false);
