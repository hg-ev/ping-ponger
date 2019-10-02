#!/bin/bash
set -e

POSTGRES="psql -U postgres"

echo "Creating databases: tenant1, tenant2, and tenant3"

$POSTGRES <<EOSQL
\i ${POSTGRES_INIT_D}
EOSQL
