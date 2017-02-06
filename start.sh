#!/bin/bash

sed -i "s^__API_ENDPOINT__^$API_ENDPOINT^g" config-docker.js

cd /app
npm start
