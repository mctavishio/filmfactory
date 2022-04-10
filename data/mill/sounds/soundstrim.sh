for audio in $(ls *.mp3)
do
	newaudio="${audio%???}"4min.mp3
	echo "starting on $audio"
	sox "$audio" "$newaudio" trim 0 00:04:00 fade 0:00 00:04:04 00:00:12
	echo "done with $audio"
done;
