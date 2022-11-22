#!/bin/bash

npm run build
rsync -avr --delete-after out/* root@epoch.tw:/var/www/epoch-index-page
