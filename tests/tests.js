describe('Content Tests', function(){
	// stub tests for now to make sure karma and phantom are
	// hooked up correctly
	// it('should expect this test to fail', function(){
	// 	expect(true).toBe(false);
	// });
	it('should expect this test to pass', function(){
		expect(true).toBe(true);
	});
});

describe('quoteLength function as property of TweetIt module', function(){
	beforeEach(function(){
		var newTweet = Object.create(TweetIt);
	});
	it('should be defined', function(){
		var newTweet = Object.create(TweetIt);
		expect(newTweet.limitQuote).toBeDefined();
	})
	// ensure lenght of strings are under 100
	it('should restrict string lengths to 100', function(){
		var newTweet = Object.create(TweetIt);
		var quote = 'this is an insanely string but what you do know about the things to come from the future, okay that is weird';
		expect(newTweet.limitQuote(quote).length).toBe(100);
	});
	// if string is already less than 100, the string should be returned
	it('should return the string', function(){
		var newTweet = Object.create(TweetIt);
		var quote = 'what is up';
		var sameQuote = newTweet.limitQuote(quote);
		expect(sameQuote).toEqual(quote);
	});
});