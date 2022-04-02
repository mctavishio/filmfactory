for f in film_shim
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
echo "done with film_shim"
cd ..
