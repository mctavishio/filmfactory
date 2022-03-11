
cd film_bwxrxx_1646871962708
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwxrxx
rm *.png
cd ..
echo "file './film_bwxrxx_1646871962708/film.mp4'" >> filmfiles.txt 

cp nextSteps_1646871962708.sh film_bwxrxx_1646871962708/nextSteps.sh
cp mill012_bwxrxx.js film_bwxrxx_1646871962708/mill012_bwxrxx.js
