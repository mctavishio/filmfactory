
cd film1645474399979
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{00,24,48,72}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwr
cd ..

cp nextSteps_1645474399979.sh film1645474399979/nextSteps.sh
cp mill007.js film1645474399979/mill007.js
