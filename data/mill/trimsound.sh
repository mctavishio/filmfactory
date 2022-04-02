echo  "enter audio file and press [ENTER]: "
read audio
sox $audio soundtrimmed.mp3 trim 0 00:04:00 fade 0:00 00:04:00 00:00:12
