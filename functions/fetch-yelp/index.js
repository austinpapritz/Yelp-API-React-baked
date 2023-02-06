const fetch = require('node-fetch');
require('dotenv').config({ path: `.env.development.local` });

exports.handler = async (event) => {
  const zip = event.queryStringParameters.zip;
  // add code here to fetch data from yelp API
  // be sure to include the parameters from event.queryStringParameters
  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?categories=restuarants&location=${zip}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        },
      }
    );
    const data = await response.json();
    const json = JSON.stringify({ data });

    return {
      statusCode: 200,
      body: json,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
