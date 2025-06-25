require('dotenv').config();

const requiredVars = ['MONGO_URI'];
requiredVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

console.log('✅ Environment variables loaded successfully.');