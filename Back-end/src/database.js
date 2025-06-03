const { Pool } = require("pg");

const URL_PG = "postgres://postgres:02102024@localhost:5432/jdonalds";

const database = new Pool ({
    connectionString: URL_PG
});

module.exports = database;