# Notes

### 12/3/2014 
Back at it again, trying to get this simple TweetIt extension completed. I could also add Facebook and Tumbler options if I can ever get this to work properly.

The goal is still to have this work like the action that happens when a user highlights text that is part of a Medium post.

I'm having trouble creating a tooltip over the highlighted text.

Okay, I think the problem was that I was not using absolute positioning.

Well, that didn't really solve much. Looks like I need to use float and relative positioning. I need to find a way to get the parent element of the leftmost highlighted text. For example, if the highlighted text spans multiple list item elements, I always want the div placed, well, I don't know yet.

Another issue I'm having is that

### 12/4/2014 
I guess it is already the 4th. It looks like I can use stylesheets, so I don't have to go through all the trouble of styling using JS. http://stackoverflow.com/questions/11553600/how-to-inject-css-using-content-script-file-in-chrome-extension 

I should also probably move to jQuery, since I'll probably also be using a jQuery tooltip library: 
http://iamceege.github.io/tooltipster/#getting-started

If I use a tooltip plugin, I might be better off adding a span element around the first highlighted word. 

Damn, this might have been the answer I've been looking for:
http://stackoverflow.com/questions/16498877/how-to-wrap-highlighted-text-with-a-span-and-place-a-div-positioned-relative-to 

except, I won't be using jQueryUI and I don't want to highlight the whole selection, just the first word.