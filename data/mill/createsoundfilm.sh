#!/bin/sh
outputfilename=film$(date "+%s").mp4
echo  "enter video file and press [ENTER]: "
read video
echo  "enter audio file and press [ENTER]: "
read audio
echo  "enter output file and press [ENTER]: "
read output
echo
echo video: $video and audio: $audio and output: $output
ffmpeg -i $video -i $audio -map 0:v:0 -map 1:a:0  -c:v copy -c:a aac -b:a 192k $output

