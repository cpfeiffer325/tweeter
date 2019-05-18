# Tweeter Project

Tweeter is a simple, single-page AJAX-based Twitter clone. It uses jQuery,HTML5 and CSS to help web development student get comfortable with their front end skills along with Node, Express and MongoDB for the back-end.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. 
    - The app will be served at <http://localhost:8080/>
    - The wapp will connect to the mongo database mongodb://localhost:27017/tweeter
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Chance
- MD5
- MongoDB
- Body-parser

## Dev-Dependenies

- Nodemon

## App functionality
- Compose button collapses and expands new tweet text box and focuses upon opening
- Tweets limited to 140 characters and produce error on exceedance or blank tweets
- Tweets highlight on hover
- Tweets stored in Mongo database
- Auto refresh posts tweets to feed right after commit
- Randomly generated avatar and user for every single tweet
- Time duration since tweet was posted shows in the footer

### Screenshot
!["Screenshot of app"](https://github.com/cpfeiffer325/tweeter/blob/refactor/docs/App-Screenshot.png)

### Video of App
Paste the following extension into browser to view functionality of app
[chrome-extension://mmeijimgabbpbgpdklnllpncmdofkcpn/app.html#/files/64dd0293-cec6-4602-y6e0-767a51b40260]


