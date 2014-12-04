So I was thinking about how I always want to quote things I read on web pages and tweet them. I thought about creating a chrome extension for it. Then I saw this functionality was available in Medium and thought it would be a simple way to learn a little about chrome extensions before I tackle Chrome apps.

## Functionality
1. User should be able to install extension from chrome web store
2. I like how the tweet icon shows up when text is highlighted in Medium, so I'll try to replicate that feature
3. When user clicks the link, the tweet should be posted, either after they have authenticated with OAuth
4. Quotes should be trimmed down to 100 chars with the quote attributed to the url of the page
5. if the quote is too long, it will be trimmed to 97 chars with ellipses 
6. The url will shortened

## Tasks
- [x] load extenstion in local browser
- [x] output highlighted text to console with extension loaded
- [ ] twitter logo tooltip hover at end of highlighted section of text
- [ ] send highlighted text and page url to background page for processing
- [ ] shorten the url of the page with highlighted text (http://dev.bitly.com/get_started.html)
- [x] Research OAuth in Chrome apps and with Twitter (Can use Twitter Web Intents)
- [x] work out signing in to post on twitter (Use Twitter Web Intents)
- [ ] settings to disable the tweet tooltip if desired