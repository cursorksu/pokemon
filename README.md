# Test Teamvoy

  [DEMO LINK](https://cursorksu.github.io/pokemon/)

## Deploy locale project
    1. npm i
    2. npm start
    3. open your browser at <http://localhost:3000>

## Task
On click of ‘Load More’ another chunk of the list is being loaded and displayed on the page. Pokemon details should be displayed after clicking on the single pokemon in list. Previously shown pokemon details should disappear.

Regarding API:
Get chunk of pokemon list
http://pokeapi.co/api/v1/pokemon/?limit=12
Get information about single pokemon
http://pokeapi.co/api/v1/pokemon/{{id}}
Image of pokemon
http://pokeapi.co/media/img/{{id}}.png  (or available through sprites.resource_uri resource)
All possible types
http://pokeapi.co/api/v1/type/?limit=999
You can find out more information from the docs


Bonus points for implementing:
Adaptive styling (able to view this on all screen widths)
Filter visible pokemons by type

For this task you can use any css/js library/framework.

Handing in task:
Source code of the task should be available through the GitHub. There should be README.md (markdown file) file with clear instructions on how to run client app. It is preferable to have standalone running app using github-pages (just push your code to gh-pages branch of the repo).
