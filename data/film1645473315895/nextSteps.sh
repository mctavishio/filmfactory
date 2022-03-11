
cd film1645473315895
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{00,24,48,72}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
cd ..

cp nextSteps_1645473315895.sh film1645473315895/nextSteps.sh
cp mill006.js film1645473315895/mill006.js
