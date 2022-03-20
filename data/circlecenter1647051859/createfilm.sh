let timestamp=$(date "+%s");
echo $timestamp
node mill013 bwxxxx mctavish "film #$timestamp" 
bash nextsteps_mctavish.sh
cp filmfiles.txt filmfiles$timestamp.txt
ffmpeg -f concat -safe 0 -i filmfiles.txt -c copy film$timestamp.mp4
