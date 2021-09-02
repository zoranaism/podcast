# Week 6 formal assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for this assessment:

- You are required to do your assessment individually
- You are allowed to use any materials in the reader or on the internet
- You are allowed to start your assessments with the frontend and backend templates
- If you found some code on the internet and used it, put a link in your `REFLECTION.md` to the stackoverflow post or documentation where you found it
- You are NOT allowed to look at another student's code, or receive external help
- As stated in the traineeship contract, if you plagiarise other student's work you will receive an invoice for the course: €280 for each day of the course
- Start time: monday 10:00
- Deadline: wednesday 22:00, any commits made after 22:00 will be excluded from your evaluation
- If your frontend app does not run on `npm install && npm start` you will receive a 5 point penalty
- If your backend app does not run on `npm install && npm run initdev` you will receive a 5 point penalty
- If your either of your apps is pushed to a PUBLIC repository you automatically fail this assessment
- If you discuss the assessment in a slack channel you automatically fail this assessment
- Passing grade: 45 / 60 points
- Extension granted at: 30 / 60 points, a self assessment and a ~200 word reflection regarding your process

#### Second opinion

- As per CRBKO rules you can request a second opinion from another teacher if you disagree with your evaluation. To request reevaluation send an email to: teachers@codaisseur.com

## How to make and submit your homework

- Create a 2 PRIVATE repositories on github, one for the client, one for the server
- Add the evaluator as a collaborator on github
- Push your work to your repositories

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

#### Frontend

- Basic knowledge of React
  - components
  - props
  - useState
  - useEffect
  - event listeners & handlers
- Routing & dynamic routing using react-router-dom
- Making a reducers that transform the redux state
- Using selectors to take state from the redux store and use it in your components
- Dispatching actions from your components to change the redux state
- Seperating reducers & actions & selectors
- Using async actions (redux thunk)
- Sending GET / POST / PATCH and DELETE requests using axios
- Setting an authorization header with a JWT to make an authorized request

#### Backend

- Starting and restarting a docker container running a postgres server
- Generating models & migrations using sequelize-cli
- Doing database validation using sequelize models (e.g. allowNull: false, unique: true)
- Implementing hasMany, hasOne and belongsTo relations
- Adding foreign keys to models in migrations
- Adding relations to sequelize models
- Generating seed data using sequelize-cli
- Creating, updating & deleting records from the database using sequelize models
- Querying the database using sequelize models
- Eager loading related models using sequelize `include`
- Implementing GET / POST / PATCH / DELETE routes in express
- Sending responses with express
- Setting status codes to responses in express
- Seperating routes using the express Router
- Using the auth middleware to manage authorization for routes in express

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating homework experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

## What are we building?

We are building a webapp where people can put up their artworks for auction and encourage other people to make more art. It is called `Heart Works`. It has multiple pages:

- Signup & Login pages (already implemented in the starter kit)
- A page with a list of artworks up for auction
- A detail page for artworks where you can bid or `heart` an artwork
- A form where you start an auction

It is recommended that you use the react-redux & express templates where the login / signup flow has been implemented.

[Frontend starter](https://github.com/Codaisseur/react-redux-jwt-bootstrap-template)
[Backend starter](https://github.com/Codaisseur/express-template)

## Wireframe

You will be provided with a wireframe that shows an overview of the app along with this README

## Entities

### Artwork

| key        | data type | required | notes                           |
| ---------- | --------- | -------- | ------------------------------- |
| id         | Integer   | yes      | Already added by model:generate |
| title      | String    | yes      |                                 |
| imageUrl   | String    | yes      |                                 |
| hearts     | Integer   | yes      | default value is 0              |
| minimumBid | Integer   | yes      | can be 0                        |
| createdAt  | Date      | yes      | Already added by model:generate |
| updatedAt  | Date      | yes      | Already added by model:generate |
| userId     | Integer   | yes      | Foreign key (references a user) |

**Relations:**

- artwork belongs to user
- artwork has many bid

### Bid

| key       | data type | required | notes                                |
| --------- | --------- | -------- | ------------------------------------ |
| id        | Integer   | yes      | Already added by model:generate      |
| email     | String    | yes      |                                      |
| amount    | Integer   | yes      |                                      |
| createdAt | Date      | yes      | Already added by model:generate      |
| updatedAt | Date      | yes      | Already added by model:generate      |
| artworkId | Integer   | yes      | Foreign key (references an artworks) |

**Relations:**

- bid belongs to artwork

### User

| key       | data type | required | notes                              |
| --------- | --------- | -------- | ---------------------------------- |
| id        | Integer   | yes      | Already implemented                |
| name      | String    | yes      | Already implemented                |
| email     | Integer   | yes      | Already implemented, unique        |
| password  | String    | yes      | Already implemented, password hash |
| isArtist  | Boolean   | no       |                                    |
| createdAt | Date      | yes      | Already implemented                |
| updatedAt | Date      | yes      | Already implemented                |

- user has many artwork

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| Server contains sequelize models for Artwork and Bid                       | 2      |
| Server contains migrations to create artworks and bids tables              | 2      |
| required fields for artworks and bids are validated in models & migrations | 2      |
| User, Artwork and Bid models are correctly related                         | 2      |
| Seeders are present to create at least 3 artworks and 5 bids               | 2      |
| Total                                                                      | 10     |

## Features

### 1. As a user I want to view a list of artworks

- The default page you see when you go to `/` should be a list of artworks
- Each artowork is displayed with the title, image, the number of hearts it has and the number of bids it has
- There is a button linking to the details of that artwork

| Criteria                                                                       | Points |
| ------------------------------------------------------------------------------ | ------ |
| The frontend route `/` displays a list of artworks                             | 1      |
| The artworks are fetched from the server                                       | 1      |
| The artworks are displayed with their number of bids they have in the database | 2      |
| An array of artworks is stored and managed by redux                            | 1      |
| A selectors and actions are defined in a seperate files                        | 1      |
| Each artwork has a `View details` button, it links to a artwork's details      | 1      |
| Total                                                                          | 7      |

### 2. As a user interested in buying people's art, I want to see the details of an artwork, so I know what it costs

- When we click on the `View details` button of an artwork we see the details of that artwork
- On this detail page we can see the bids belonging to that artwork

| Criteria                                                                       | Points |
| ------------------------------------------------------------------------------ | ------ |
| The frontend route `/artworks/:id` displays a detail page for an artwork       | 1      |
| The artworks are displayed with a title, image and the number of hearts it has | 1      |
| The bids belonging to the artwork are displayed with email and amount          | 1      |
| The artwork and its bids are fetched from the server                           | 1      |
| Total                                                                          | 4      |

### 3. As a user I want to give people hearts for their artwork, so I can encourage them to make more art

- Any user, logged in or not should be able to click a button `give heart`
- It increases the `hearts` property of an artwork by 1
- We do not keep track of who gave a heart to the artworks, just the amount of hearts the artwork has

| Criteria                                                                                     | Points |
| -------------------------------------------------------------------------------------------- | ------ |
| On the artwork's detail page we see a button with `give heart`                               | 1      |
| When the `give heart` button is clicked the number of hearts changes on the page             | 1      |
| Clicking the `give heart` button sends a PATCH request to the server                         | 1      |
| Clicking the `give heart` button updates the `hearts` property of an artwork in the database | 1      |
| The number of hearts an artwork has is also updated in the list of artworks on `/`           | 1      |
| You have to refresh to see the number of hearts update                                       | -1     |
| Total                                                                                        | 5      |

### 4. As a user interested in buying people's art, I want to be able to make a bid, so I can show my interest in buying an artwork

- On the detail page for an artwork there should be a form with 1 field: `amount`
- This form allows a user to make a bid
- This should only be possible when a user is logged in
- The email value for the bid can be taken from the redux store
- Alternatively make an input for the email as well
- The minimum value of the form should be the highest bid + 1 euro

| Criteria                                                                                | Points |
| --------------------------------------------------------------------------------------- | ------ |
| When a user is logged in we can see an number input for amount and button to `Bid`      | 1      |
| When the `Bid` button is pressed, it makes a POST request to the server                 | 1      |
| When the `Bid` button is pressed, A value for amount and email are sent to the server   | 0.5    |
| When the `Bid` button is pressed, A bid is created in the database                      | 0.5    |
| The bid created in the database has the correct `artworkId`                             | 1      |
| The new bid can be seen on the page                                                     | 1      |
| An Authorization header is set in the request                                           | 1      |
| The auth middleware is used on the server side to authorize the request                 | 1      |
| The minimum value of the input for amount in the frontend is the highest bid amount + 1 | 1      |
| If there are no bids yet the minimum value is the `minimumBid` value from the artwork   | 1      |
| The backend validates that the new bid is the highest bid so far                        | 2      |
| Total                                                                                   | 11     |

### 5. As an artist I want to be able to post an artwork, so I can make money with my art

- As an artist (a user with `isArtist: true` and who is logged in) you should be able to post an artwork
- You can build this feature by hardcoding the value of `isArtist` the dynamic value is the next feature
- If you're logged in and an artist you see a `Start an auction` tab in the navbar
- This leads to a form where you can post an artwork

| Criteria                                                                | Points |
| ----------------------------------------------------------------------- | ------ |
| There is a link with `Start an auction` in the navbar                   | 0.5    |
| A user can only see this link when you are logged in                    | 0.5    |
| A user can only see this if the user object contains: `isArtist: true`  | 1      |
| Clicking `Start an auction` links to a page with a form                 | 1      |
| The form contains inputs for title, minimum bid & imageUrl              | 1      |
| When the form is submitted a POST request is sent to the server         | 1      |
| An Authorization header is set in the request                           | 1      |
| The auth middleware is used on the server side to authorize the request | 1      |
| The POST request updates the database with input from the user          | 1      |
| The artwork saved in the database has the correct `userId`              | 1      |
| The user sees a success message if the artwork was posted successfully  | 1      |
| The success message is an alert, confirm or prompt popup or console.log | -1     |
| Total                                                                   | 10     |

### 6. As an administrator to this website, I want users to be able to specify that they are artists, so I know how my platform is being used

- When signing up, we want to users to specify that they are artists
- We can do this by adding a checkbox to the form
- We will also have to write a migration to add a column `isArtist` to our table

| Criteria                                                                           | Points |
| ---------------------------------------------------------------------------------- | ------ |
| A migration is created to add a column `isArtist` to our users table               | 3      |
| A checkbox is added to the signup form                                             | 1      |
| The `signUp` action also sends a value for `isArtist` when posting to the server   | 1      |
| When the checkbox is checked on signup, the user created has `isArtist: true`      | 1      |
| When the checkbox is not checked on signup, the user created has `isArtist: false` | 1      |
| Total                                                                              | 7      |

### 7. Finishing up

- Self assess: Score your assessment yourself using the table below
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your respository using `git push origin master`

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (max off by + or - 7 points) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words | 2      |
| Student has regularly committed changes (at least 1 commit per feature)    | 0.5    |
| Student has written clear commit messages                                  | 1      |
| Student has pushed their repository using git                              | 0.5    |
| Total                                                                      | 6      |

### Self assessment

| Section                      | Max Points | Self assessed points | Assessor |
| ---------------------------- | ---------- | -------------------- | -------- |
| 0 Migrations, models & seeds | 10         | 0/10                 | 0/10     |
| 1 Artworks list              | 7          | 0/7                  | 0/7      |
| 2 Artwork details            | 4          | 0/4                  | 0/4      |
| 3 Giving hearts              | 5          | 0/5                  | 0/5      |
| 4 Bidding                    | 11         | 0/11                 | 0/11     |
| 5 Posting an artwork         | 10         | 0/10                 | 0/10     |
| 6 Signing up as an artist    | 7          | 0/7                  | 0/7      |
| 7 Finishing up               | 6          | 0/6                  | 0/6      |
| Total                        | 60         | 0/60                 | 0/60     |
