So I was thinking about how I always want to quote things I read on web pages and tweet them. I thought about creating a chrome extension for it. Then I saw this functionality was available in Medium and thought it would be a simple way to learn a little about chrome extensions before I tackle Chrome apps.

## Functionality
1. User should be able to install extension from chrome web store
2. I like how the tweet icon shows up when text is highlighted in Medium, so I'll try to replicate that feature
3. When user clicks the link, the tweet should be posted, either after they have authenticated with OAuth (Using web intents)
4. Quotes should be trimmed down to 100 chars with the quote attributed to the url of the page
5. if the quote is too long, it will be trimmed to 97 chars with ellipses 
6. The url will shortened (this is done automatically by twitter)

## Installation 
1. To install, clone this git repository using `git clone https://github.com/winious/TweetIt.git`
2. Then open a new chrome tab and type `chrome://extensions/`
3. Click on "Load unpacked extension" and select the folder that contains this code (the manifest.json file)

## Todo 
- [ ] Style the tooltip
- [ ] Allow users to disable the extension on a page (remember these settings)
- [ ] Add tests
- [ ] Add CI