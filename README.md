# M.IPHY - Movie Gifs

## User Story
AS a movie connoisseur
I WANT to find all relevant GIFs for any given movie
SO THAT I can humor my friends and family with endless GIFs

## Acceptance Criteria
GIVEN a movie database with search functionality
WHEN I search for a movie title
THEN I am given a list of search results with filter options
WHEN I select a movie title from the search results
THEN I see a collection of GIFs related to the movie
WHEN I select a GIF
THEN I am given options for sharing

## DESCRIPTION
Have you ever wanted to use a specific GIPHY from that one specific movie?
You can search for your favorite movie via OMDB's API and select a GIPHY via GIPHY's API. It's an easier way to look up your favorite movie for that perfect GIPHY! This fun and quirky web page is a one-stop shop for a GIPHY fanatic! 

## VISUALS

### Creation Details:
Feel & Design -
A clean and playful looking color scheme was decided upon with a fun logo of a cat mascot, representing the 'M' in M.IPHY. Below the logo is a user-friendly search bar and button.

![image](https://user-images.githubusercontent.com/118077000/215887771-4af72f83-3ae0-4b5d-9a88-cf99aeadc1a7.png)

A navbar at the top allows user to contact us

![image](https://user-images.githubusercontent.com/118077000/215941737-355ff858-ef17-4528-88bb-c2b6e01c4066.png)

On the contact us tab, the user is able to input their info with a comment and submit. We have created a dummy mailinator account for the feedback submissions.

![image](https://user-images.githubusercontent.com/118077000/215941897-8d9ce41b-6d1f-4708-9cce-ef02c7700013.png)

Once the user has searched for their desired movie, you are lead to the results page. This page continues with the same feel and design as the homepage. Users can pick their gif and/or search for another movie without having to return to the homepage. However, if a user would like to return to the homepage, there is a home button icon in the top left corner(see Future Development section for more info on the home icon button).

![image](https://user-images.githubusercontent.com/118077000/215897356-2b64f922-bfad-4a65-99db-6675139dba78.png)

We also have an array of movie quotes that changes on refresh. Some version of the word GIPHY/Gif is inserted to give the web site some character through humor.

![image](https://user-images.githubusercontent.com/118077000/215897626-38448155-e7f3-4a4f-b91c-b482acf52d98.png)

![image](https://user-images.githubusercontent.com/118077000/215897668-c63340e1-ed27-4f4f-ac93-18b3dba0d3b5.png)

Gifs are then displayed onto the page, ready for the user to right click, save image, and share.

![image](https://user-images.githubusercontent.com/118077000/215897971-a8993e74-c613-4d63-8411-404641bf03ee.png)

Functionality -

Javascript:
the following code pulls from OMDb API to display movie titles onto the web page:

![image](https://user-images.githubusercontent.com/118077000/215898951-e99f02df-6767-494b-b2b3-b0714c4dc0ce.png)

Next, the code pulls from GIPHY's API to insert the first 3 GIFs per movie title:

![image](https://user-images.githubusercontent.com/118077000/215899253-54173e24-dab8-4b9d-ad23-17f5bb29f4cf.png)

Buttons, classes and tag elements were created using Javascript alongside HTML:

![image](https://user-images.githubusercontent.com/118077000/215899582-a30924d2-746a-4e04-82b4-5bf9d59c9934.png)

## USAGE
Upon visiting the webpage you are welcomed with a simple search and navigation bar. The user can simply type in a movie title. Once a user searches for a movie, results are then pulled from OMDb's API server. This assists users that want a specific GIPHY related to a movie. A perfectly curated GIPHY will then be ready to share. 

## Future Development
Homepage
- Add trending Gifs for user to view. Which also assists in making use of home icon on results page.

Results page
- Add button for user to choose to see all related results provided on GIPHY's web site.

Website URL: https://jtich40.github.io/miphy-movie-gif-generator/
