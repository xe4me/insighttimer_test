This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Code Challenge for InsightTimer, written in ReactJS.

## To run the application : 
1- `npm run start / yarn start`

2- Navigate to http://localhost:3000/albums/1


##Assumptions: 

1- Used Jest and Enzyme for testing

2- Used Sass as the css preprocessor

3- Used Typescript

4- I considered using form for many reasons. Firstly, it will elimintate the usa



## TBC : 

1- The mixins are not comprehensive, I just created them to show case.

2- I have left some // TODO items in the code. For example, the css transition is better if written in a mixin of sort.

3- The Google fonts are normalise.css is left in index.html is a terrible practice. Firstly they're blocking the UI and secondly they're not secure.
At the very least, we can download and package them in our bundle and serve them ourselves.

4- In terms of using an icon library or something like icomoon, there's many things that needs to be considered before making a decision, but for the sake of simplicity and saving time, I think icomoon will do the job for now.

5- When it comes to unit testing, I could spend more time to test more but I think I have covered the major ones.
Two api calls are mocked and tested in AlbumContainer, to show case the mocking. Also Photo component is tested in very details, to show case static element testing.
 
6- There's no error handling, although I created a catch all, but it doesn't do anything

7- Unfortunately the provided API is extremely slow and most of the time it fails to show the actual photos.
Meanwhile, the titles are 4-5 times longer than the provided design, and if we use the titles as alt in the src of the image, when the image does not load, it gets really ugly.
I would definitely spend some time either creating an ImageLoader component which would show some sort of a loading icon or better a lower resolution of the actual image, while the actual image is loading.

8- Note that I have not considered any special breakpoint ( visually) for tablet, because in the design it was only mobile and desktop.  

9- I could've used a Grid System and there's many open source of course, but it was way easier to just use a simple flex-box. 
 

## Visual Testing

To see the different permutations of the rows, given different number of them

http://localhost:3000/album/16 for more than 3 in desktop
http://localhost:3000/album/3 for 2 in desktop 

