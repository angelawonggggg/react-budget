#!/bin/bash
if [ "$PROD_MODE" = '1' ]; then
    yarn start
else
    yarn
    yarn dev
fi