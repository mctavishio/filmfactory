cd film_start 
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
ffmpeg -framerate 24 -i frame%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
rm *.png
cd ..
echo "file './film_start/film.mp4'" >> filmfiles.txt
cd film_000 
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
ffmpeg -framerate 24 -i frame%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
rm *.png
cd ..
echo "file './film_000/film.mp4'" >> filmfiles.txt
cd film_001 
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
ffmpeg -framerate 24 -i frame%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
rm *.png
cd ..
echo "file './film_001/film.mp4'" >> filmfiles.txt
cd film_002 
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
ffmpeg -framerate 24 -i frame%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
rm *.png
cd ..
echo "file './film_002/film.mp4'" >> filmfiles.txt
cd film_003 
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
ffmpeg -framerate 24 -i frame%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
rm *.png
cd ..
echo "file './film_003/film.mp4'" >> filmfiles.txt
cd film_end 
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
ffmpeg -framerate 24 -i frame%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
rm *.png
cd ..
echo "file './film_end/film.mp4'" >> filmfiles.txt
ffmpeg -f concat -safe 0 -i filmfiles.txt -c copy film_silent.mp4
