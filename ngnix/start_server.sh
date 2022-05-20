#!/bin/bash

sed -i -e "s|BACKEND_URL|$BACKEND_URL|g" "./www/data/index.html"

sh -c nginx