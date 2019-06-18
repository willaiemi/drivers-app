# drivers-app
Welcome to my Node API and React App!
If you want to know how to make this code work in your computer, I'll help you.

### Before trying to make it work:
Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

### First: Set up MongoDB in your computer
There's plenty of material on how to do it. Make sure your mongodb is located at `localhost:27017`. If your mongodb database is located in another place, change it at [API/server.js:17](API/server.js).

### Second: Set your Maps API Key
Just change it at [reactapp/src/services/google-maps-api-key.js](reactapp/src/services/google-maps-api-key.js). Don't know how to get one? Try [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

### Third: Get two terminal windows
Use one of them to run `npm install` and then `npm run dev` at the [/API/](API). The other terminal will run `yarn install` and `yarn start` at [/reactapp/](reactapp).
#
There it is! You're good to try it.
