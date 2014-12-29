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

It may be easier to add an empty span in front of the first selected word, rather than surround the word. This way I can just remove it when something else is clicked. 

my very slightly modified version: http://jsfiddle.net/zcccqxaq/2

okay, i found a potential issue with this. the text gets modified when the span is removed. That may just be the way the console interprets the activity though, since the layout remains unchanged since whitespace is ignored in HTML. I need to go to bed. 


### 12/19/2014 
I actually just want to insert a span at the beginning of the selected text. 

I was able to get the spans added. Now I just need to figure out how to add the persistent tooltip. 

### 12/20/2014 
Today, I'm going to get the tooltip finished, trying to use CSS to style it. 

Then, I'll have to decide how to handle tweet submission. 

### 12/21/2014 
Yesterday, I couldn't find the time to work on this, so I'll continue tonight.