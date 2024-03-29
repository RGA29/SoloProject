const { Pool } = require ("pg"); 
require('dotenv').config(); 

const PG_URI= process.env.PG_URI

// CREATING A NEW POOL 
const pool = new Pool({
    connectionString: PG_URI, 
})

// to add schema of data base here 


module.exports = {
    query: (text, params, callback) => {
        console.log("executed query", text);
        return pool.query(text, params, callback); 
    },
}; 