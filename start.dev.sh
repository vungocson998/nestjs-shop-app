#!/bin/sh
cp ormconfig.json.dev ormconfig.json

npm install

npm start:prod

