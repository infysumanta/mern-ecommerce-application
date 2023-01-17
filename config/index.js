module.exports = {
  APP_NAME: process.env.APP_NAME || "Shopping Store",
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/mern-ecommerce-app",
  JWT_SECRET: process.env.JWT_SECRET || "23e4rtyhjhbvcxdrtyuiop09876543wsdcvbn",
  STRIPE_KEY: process.env.STRIPE_KEY || "pk_test_xxxxxxxxxxxxxxxxxx",
  STRIPE_SECRET: process.env.STRIPE_SECRET || "sk_test_xxxxxxxxxxxxxxxxxx",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
};
