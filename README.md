# jaskkro

Welcome to my website's project files! For this project, I developed a program that allows a user to search for tracks, albums, and artists with the spotify API through a custom web app based on Node.js, Express.js, and Vue.js.

## Input
```
The spotify search portion of this application accepts a search type (from the three mentioned above, track by default) from the user, in addition to a string as the search input. The string you provide may include common search query modifiers such as 'AND', 'OR', and 'NOT'. Including these terms allows you to build complex searches and hone your results.

ex: "Yung Gravy NOT bbno$" - will return Yung Gravy songs that do not feature bbno$, a frequent collaborator.
```

## Output
```
The expected output once a valid search is supplied will vary based on whether the user has requested track, album, or artist results. In any case, an image is supplied showcasing album or artist art. Tracks and albums supply titles, release dates, and popularity metrics. Artist results often have genre tags commonly associated with those artist.
```

There is a lot of room with these beginnings to further build associations between artists and tracks. Spotify provides a rich well of data it calculates using their propriety algorithms on every track. I intend to continue work on this project in the hopes of it becoming a useful music discovery tool for my friends and I.

Digressions aside, let's get this project up and running..

## General setup
```
This project has been tested in a WIN10 environment running node version 10.19.0. I would recommend using this version of node to run and build the project, I have had trouble with newer versions and node/vue stacks in the past.

Node v10 is available at:
https://nodejs.org/dist/latest-v10.x/

Once node is configured, fire up your command utility of choice (I use cygwin on windows) and navigate to the project directory. You will need to do an 'npm install' to get all node packages and dependencies required to build and run the project.

Once your dependencies have finished installing, go ahead and launch the local server with 'npm run serve'. Node should launch a server for you, and express should serve the project files just like you are accessing the site on the web. Refer to the command prompts output, but more than likely your local server will be running at localhost:8080, which you can input into your browser to access.

In the event you have any difficulties getting the app running, let me know, and also please be aware that the same state of these project files is available publicly on a heroku instance at http://jaskkro.com.
```

## Running the project
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
