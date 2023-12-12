

// Import the 'mssql' module
const sql = require('mssql');
require("dotenv").config();
const config = {
    database: process.env.MSSQL_DATABASE,
    server: process.env.MSSQL_SERVER,
    user: process.env.MSSQL_USERNAME,
    password: process.env.MSSQL_PASSWORD,
    options: {
      trustedConnection: true,
      trustServerCertificate: true
    }
  }


  // Function to connect to the database
async function connectToDatabase() {
    try {
        // Create a connection pool
        let pool = await sql.connect(config);

        // Query the database
        let result = await pool.request().query('SELECT * FROM mst_pizzaprice');

        console.log(result);
    } catch (err) {
        // Catch and display errors
        console.error(err);
    }
}

// Call the function to connect to the database
connectToDatabase();