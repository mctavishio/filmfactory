
cd film1645466554170
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{00,24,48,72}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
cd ..

cp nextSteps_1645466554170.sh film1645466554170/nextSteps.sh
cp mill006.js film1645466554170/mill006.js
