  // Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const dotenv = require('dotenv');
dotenv.config();

const stripe = require('stripe')(process.env.SECRET_KEY);



  
  
  exports.getPayment =  async (req, res, next) => {
    //get payment      
  }


  exports.createPayment =  async (req, res, next) => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'usd',
      // Verify your integration in this guide by including this parameter
      metadata: {integration_check: 'accept_a_payment'},
    });

    const intent = paymentIntent
    res.json({client_secret: intent.client_secret});
      
  }

