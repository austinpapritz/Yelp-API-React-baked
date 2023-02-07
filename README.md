# React Yelp API

## Getting Started

1. Use [the React Yelp API template repo](https://github.com/alchemycodelab/react-half-baked-yelp-api) to get started.
2. Sign up for a Yelp API key [here](https://www.yelp.com/developers/documentation/v3) - you need to create an App and it will give you an API key - store the key in your `.env.development.local` file
3. To use Netlify functions locally, we need to use a special command to start our app - instead of `npm start` use `npm run dev`

## Learning Objectives

- Use netlify functions to proxy third party APIs
- Explain the need for proxy APIs and how netlify functions solve the problem

## Description

For this deliverable, you will be setting up a netlify function to proxy the Yelp API. Yelp's [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policy prevents users from making API requests from the browser because doing so would expose the user's API key. Instead we will setup a netlify "serverless function" which will run the API request from the Netlify server where your React code is running. Since the request isn't happening in the browser, the Yelp API is okay with it.

## Acceptance Criteria

- Users can enter a zip code and a search string and see a list of matching restaurants

## Rubric

| Task                                                              | Points |
| ----------------------------------------------------------------- | ------ |
| Netlify function properly calls the Yelp API and returns the data | 4      |
| App.js has state for Zip Code and Search controlled by the inputs | 4      |
| Search button calls `fetchBusinesses` and sets result in state    | 2      |

## Stretch Goals

- Add React Router and make pages for specific categories like restaurants, hiking trails, movie theatres etc. (see the list of [categories here](https://www.yelp.com/developers/documentation/v3/all_category_list)) -- update your netlify function to search for different categories
- Add another API such as the Movie DB and display results

This is the adventure of Noah and Austin

copy 404 error, can't fetch
recloned template exactly
explain half-baked: I only wrote like 10 lines of code
Someone else has gotten it to work
Clone down Rio's, DOES NOT WORK, broken in same way
Troubleshoot the above with other systems
Might need to get Netlify installed on computers
Installed netlify globally
Google netlify “serverless function” for Windows

https://docs.netlify.com/functions/optional-configuration/?fn-language=js

https://answers.netlify.com/t/netlify-dev-function-returns-404-when-using-functions-functionname-index-js-syntax-instead-of-functions-functionname-js/24124

https://docs.netlify.com/cli/get-started/?_ga=2.149832948.396875205.1675734537-1255873659.1675734537
