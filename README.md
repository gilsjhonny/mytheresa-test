# MyMovies
<p align="center">
<img src="https://i.ibb.co/jVQFmZT/Screenshot-from-2021-06-29-09-58-24.png">
</p>

<h4 align="center">A simple app that fetches movies from THEMOVIEDB using SSR</h4>
<p align="center">Made as a coding challenge for MyTheresa.</p>


## How to Use
```
# Clone this repository
$ git clone https://github.com/gilsjhonny/mytheresa-test

# Go into the repository
$ cd mytheresa-test

# Install dependencies
# Recommended Node version: Node V14
$ npm install

# Run the app
# Dev:
$ npm run dev
# or Prod:
$ npm run prod
```

## Notes
### Project
- Decided to use webpack 4 since webpack 5 is "fairly" new
- Used class components (no hooks) considering that the interviewer mentioned they use class components
- Used sass for styling
- Used Redux for store managament to store:
  - Fetched movies from the homepage
  - Movies added to wishlist
- Used Redux ducks proposal for organizing reducers/action creator/side effects 
- Fonts are loaded at page level
- Parts of the project have comments and explanations in it, feel free to read them

### SSR
- Built from scratch and surely there's things to improve
- The home page renders on server side 
- Movie's page renders on client side, wanted to go for an approach like `getInitialProps` in NextJS. I just didn't wanted to use Redux for something that shouldn't be in the global store so I left it that way.


### Problems/Solutions
Found really hard to dynamically apply stylesheets on server-side, I wanted to use that in order to load different fonts depending on the movie's category. I think I have an idea of how to do it that would involve fetching on server-side and concatenating the chunk name of the style, but still not sure what should be the proper way to do it. Since I didn't want to give up on that I took a different approach:

You can create a theme config for each genre, and depending on the genre the Movie page will import a different theme wrapper/button. This might no be the purpose of React Universal Components but this surely is a workarount to avoid loading unnecessary fonts.

<p align="center">
<img src="https://i.ibb.co/XkhGWSt/carbon-3.png" alt="carbon-3" border="0">
</p>
<p align="center">
<img src="https://i.ibb.co/sv6cRvR/carbon-2.png" alt="carbon-2" border="0">
</p>
<p align="center">
  <b>Fonts/CSS/Button loaded only when the genre matches ????</b>
<img src="https://i.ibb.co/5vvqt25/Screenshot-from-2021-06-29-12-29-25.png" alt="Screenshot-from-2021-06-29-12-29-25" border="0">
</p>

### To Add
- Testing, but due to lack of time I gave priority to make it SSR
- Selectors for redux
- Themes could have more things to differentiate them 

### Disclaimer
WishlistButton is duplicated just for the purpose of the exercise. But it's worth to mention that for the original WishlistButton I'm using the Base+Variant pattern. 

