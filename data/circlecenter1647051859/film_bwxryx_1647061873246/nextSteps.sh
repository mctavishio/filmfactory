
cd film_bwxryx_1647061873246
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwxryx
rm *.png
cd ..
echo "file './film_bwxryx_1647061873246/film.mp4'" >> filmfiles.txt 

cp nextSteps_1647061873246.sh film_bwxryx_1647061873246/nextSteps.sh
cp mill013.js film_bwxryx_1647061873246/mill013.js
