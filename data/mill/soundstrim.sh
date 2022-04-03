for audio in $(ls *.mp3)
do
	sox $audio $audio_4min.mp3 trim 0 00:04:00 fade 0:00 00:04:00 00:00:18
done;
