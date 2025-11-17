#!/bin/bash
if [ "$#" -le 0 ];
then
	echo "No arguments supplied"
	exit;
fi

idx=0
for arg in "$@"
do
	if [ $idx -le 2 ];
	then
		echo "$arg"
	fi
	idx=$((idx+1))
done
