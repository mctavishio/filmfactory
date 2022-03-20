
cd film_bwxrxx_1647066066475
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwxrxx
rm *.png
cd ..
echo "file './film_bwxrxx_1647066066475/film.mp4'" >> filmfiles.txt 

cp nextSteps_1647066066475.sh film_bwxrxx_1647066066475/nextSteps.sh
cp mill013.js film_bwxrxx_1647066066475/mill013.js
