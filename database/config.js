const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const useSSL = process.env.MYSQL_USE_SSL === 'true';

module.exports = {
    mysql: {
        database: process.env.MYSQL_DATABASE,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT || 3306,
        dialect: 'mysql',
        dialectOptions: useSSL ? {
            ssl: {
                require: true,
                rejectUnauthorized: true,
                ca: fs.readFileSync(process.env.MYSQL_SSL_CA).toString(),
            }
        } : {},
        logging: false,
        define: {
            timestamps: true
        }
    }
};
