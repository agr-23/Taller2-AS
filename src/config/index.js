require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  SPRING_BASE: process.env.SPRING_BASE || 'http://SPRINGBOOT_HOST:8080/api',
  S3_BASE_URL: process.env.S3_BASE_URL || 'https://s3.amazonaws.com/your-bucket'
};