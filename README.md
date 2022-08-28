# [Condensate]
## Inspiration
Oftentimes articles are written exceedingly verbose for no reason to fill word length requirements and wastes time when you’re trying to extract information from the news. Condensate is a step towards simply getting what you want without the tiring filler details sites often bombard you with.

## What it does
Condensate works by scraping websites and finding the main article from the website to condense into a simple summary.

## How we built it
We built the website using html5, css and javascript. The main API used was Symbl.ai which would take text and output a summary from the web scraped paragraphs. Web scraping was done with another API from Apify Web Scraper, allowing us to find the paragraphs from the crawler and outputting a JSON file for us to process.

## Challenges we ran into
Many challenges for our web scraping were because of the fact we were hosting on github instead of something else to avoid having everything run client-side. However, we managed to find an API that could run through the data and connect it to the symbl.ai API.

## Accomplishments that we're proud of
A good accomplishment that was achieved in the project was learning how to integrate APIs into our javascript and code. We started with basic web development skills and finished with learning how to host on github and utilising APIs.

## What we learned
We learned how to integrate and use symbl.ai and other APIs in the project. We learned and reviewed how to use javascript, html, css for designing a website. We learned figma, as well as basic User Interface/User Experience design, and human centered design principles. 

## What's next for Condensate?
The plans for improving Condensate are simple but effective. We want to parse more than just articles and summarize videos or conversations using symbl.ai’s effective API. Youtube videos and other media also have increasingly long periods for unnecessary information. Another step towards improving Condensate would be to add on Themes and Topics that the software can pick up on as a focus to showcase to the User to highlight its importance in the article.
