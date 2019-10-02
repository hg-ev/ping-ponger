FROM postgres:latest

RUN mkdir -p /docker-entrypoint-initdb.d

COPY ./db_init.sql  /docker-entrypoint-initdb.d/db_init.sql
