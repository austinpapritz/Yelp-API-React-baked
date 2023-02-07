const fetch = require('node-fetch');
require('dotenv').config({ path: `.env.development.local` });

const handler = async (event) => {
  // add code here to fetch data from yelp API
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'AH9hAnkPiItXzbI3mAC0uPoCr4CpoHwCxwQVpKaql5ZypseQGiKWGrS23U6t6wmVNCy6hRLyhrBTN1OMvBj2XIJuIJtGLe_tlGPAABHfL426_6zXnZsJKA_UiULhY3Yx',
    },
  };

  fetch('https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20', options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  // be sure to include the parameters from event.queryStringParameters
};

module.exports = { handler };

// const fetch = require('node-fetch');
// require('dotenv').config({ path: `.env.development.local` });

// const handler = async (event) => {
//   // add code here to fetch data from yelp API
//   // be sure to include the parameters from event.queryStringParameters
//   const zip = event.queryStringParameters.zip;
//   const search = event.queryStringParameters.search;

//   try {
//     const response = await fetch(
//       `https://api.yelp.com/v3/businesses/search?location=${zip}&term=${search}`,
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.YELP_API_KEY}`,
//         },
//       }
//     );

//     const data = await response.json();
//     const json = JSON.stringify(data.businesses);

//     return {
//       statusCode: 200,
//       body: json,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed fetching data' }),
//     };
//   }
// };

// module.exports = { handler };
