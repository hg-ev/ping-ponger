
CREATE ROLE hg WITH LOGIN PASSWORD 'password';

ALTER ROLE hg CREATEDB;

\c postgres hg

CREATE DATABASE counter;

\c counter

CREATE TABLE IF NOT EXISTS count (
   id SERIAL,
   val  NUMERIC NOT NULL,
   CONSTRAINT counter_pk PRIMARY KEY (id)
);

INSERT INTO count( val )
VALUES ( 1 );
