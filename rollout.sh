#!/bin/bash

dest='root@176.119.147.87:/sites'

npm run build
scp dist/* $dest

while getopts "a" opt
do
case $opt in
a) scp -r dist/assets $dest;;
esac
done