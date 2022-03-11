
cd film1645569532188
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bw
rm *.png
cd ..
echo "file './film1645569532188/film.mp4'" >> filmfiles.txt 

cp nextSteps_1645569532188.sh film1645569532188/nextSteps.sh
cp mill010.js film1645569532188/mill010.js
