

const express = require('express');
const app = express();

const port    = process.env.WEB_PORT_D;
const ping    = process.env.WEB_PING_D;

const pgHost  = process.env.PG_HOST;
const pgPort  = process.env.PG_PORT;
const pgUser  = process.env.PG_USER;
const pgPass  = process.env.PG_PASS;
const pgDb    = process.env.PG_DB;

const Pool = require('pg').Pool;
const pool = new Pool({
  user: pgUser,
  host: pgHost,
  database: pgDb,
  password: pgPass,
  port: pgPort,
});

const main = ( req, res ) => {

  pool.query('SELECT id FROM count ORDER BY id DESC ', (error, results) => {
    if (error) {
      throw error;
    }


  });

  pool.query('SELECT id FROM count ORDER BY id DESC', (error, results) => {
    if (error) {
      res.send( 'HTTP/1.1 404 Self Destruct Initiated');
      throw error;
    }
    try {
      num = results.rows[0].id + 1;
    }
    catch(err) {
      num = 0;
    }

    res.status(200).json(`${num} pings have been ponged`);
  });

}


app.get('/ping', ( req, res ) => {

  let num = 0;
  pool.query('SELECT id FROM count ORDER BY id DESC ', (error, results) => {
    if (error) {
      throw error;
    }

    try {
      num = results.rows[0].id + 1;
    }
    catch(err) {
      num = 0;
    }
  });

  pool.query('INSERT INTO count (val) VALUES ($1)', [num], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`pong`);
  })
});

app.get('/', main );

app.listen( port, () => console.log(`Example app listening on port ${port}!`) );
