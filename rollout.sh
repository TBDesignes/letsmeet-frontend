#!/bin/bash

npm run build
scp -r dist/* root@176.119.147.87:/sites
