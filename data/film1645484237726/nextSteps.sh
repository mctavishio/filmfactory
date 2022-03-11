
cd film1645484237726
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{00,24,48,72}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwyr
cd ..

cp nextSteps_1645484237726.sh film1645484237726/nextSteps.sh
cp mill007.js film1645484237726/mill007.js
