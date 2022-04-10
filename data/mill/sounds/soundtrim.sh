echo  "enter audio file and press [ENTER]: "
read audio
newaudio="$audio"4min.mp3
echo "$audio.mp3"
echo "$newaudio" 
sox "$audio.mp3" "trimmedsound.mp3" trim 00:00 00:04:00 fade 0:00 00:04:00 00:00:18
mv trimmedsound.mp3 "$newaudio"
echo "$newaudio" 
