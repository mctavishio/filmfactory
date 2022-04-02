for f in film_start film_000 film_001 film_002 film_003 film_end
do
	cd $f
	for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
	for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
	ffmpeg -framerate 24 -i frame%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
	rm *.png
	echo "done with $f"
	cd ..
	echo "file './$f/film.mp4'" >> filmfiles.txt
done
cd film_extra 
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
ffmpeg -framerate 24 -i frame%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
rm *.png
echo "done with film_extra"
cd ..
ffmpeg -f concat -safe 0 -i filmfiles.txt -c copy film_silent.mp4
