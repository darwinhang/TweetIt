// So I don't pollute the global scope, will try to use the module pattern from
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
var TweetIt = (function() {
	
	var selectedText =  {
		"quote": '',
		"url": ''
	};

	return {

		limitQuote: function(quote){
		if (quote.length >= 100) {
			var newQuote =  quote.slice(0, 97);
			return newQuote + '...'
		}
		return quote;
		},

		selected: function (ev) {
			var highlighted = window.getSelection();
			var highlightedText = highlighted.toString();
			var currentPage = window.location.href;
			this.removeAnchor();

			if (highlightedText.length <= 0) {
				return false;
			} 
			else {
				var range = window.getSelection().getRangeAt(0);
				var tweetAnchor = document.createElement('span');
				tweetAnchor.setAttribute('id', 'tweet-anchor');

				// bind callback function to module, otherwise the callback
				// function will be bound to the tweetAnchor
				var newTweet = this.tweetIt.bind(TweetIt);
				tweetAnchor.addEventListener('click', newTweet);
				range.insertNode(tweetAnchor);
				var what = range.getBoundingClientRect();
				var left = what.left, bottom = what.bottom;
				selectedText.quote = highlightedText;
				selectedText.url = currentPage;
			}
			return false;
		},

		tweetIt: function(ev) {
			ev.stopPropagation();

			var url = 'https://twitter.com/intent/tweet';

			var quoteText = encodeURIComponent('"' + this.limitQuote(selectedText.quote) + '"');
			var fullURI = url + '?text=' + quoteText + '&url=' + encodeURIComponent(selectedText.url);
			window.open(fullURI);

			this.removeAnchor();
		},

		removeAnchor: function () {
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
	}
})();

document.body.addEventListener('click' , function(){
	TweetIt.selected();
});