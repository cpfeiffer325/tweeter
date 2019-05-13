# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

## Notes 

### File Tree (Server Code Summary)
- `server/index.js`
   - `server/lib/in-memory-db` (in memory object database)
       - `server/data-files/initial-tweets` (json file of inital tweets)
   - `server/lib/data-helper` (interface with the database)
       - Returns `saveTweet` and `getTweet` functions that calls the database
       - `server/lib/util/simulate-delay` (returns random delay during saveTweet and getTweet)
   - tweetsRoutes `server/routes/tweets`
       - Calls the DataHelper function
           - `saveTweet`, `getTweet`, `db`
       - requires `userHelper` = `server/lib/util/user-helper`