#!/bin/bash
if [ "$#" -le 0 ];
then
	echo "No arguments supplied"
	exit;
fi
for arg in "$@"
do
	file="ex"
	file="${file}${arg}"
	mkdir "${file}"
done
