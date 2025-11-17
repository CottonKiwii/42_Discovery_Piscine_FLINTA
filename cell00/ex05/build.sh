#!/bin/bash
if [ "$#" -le 0 ];
then
	echo "No arguments supplied"
	exit;
fi
if [ "$#" -gt 0 ];
then
	for arg in "$@"
	do
		file="ex"
		file="${file}${arg}"
		mkdir "${file}"
	done
fi
