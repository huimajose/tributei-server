@echo off

cd C:\Users\WIDSON\Documents\sinet\ehr-app

node parse.js
parse-dashboard --config parse-dashboard-config.json
npm start
