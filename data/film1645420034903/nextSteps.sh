
cd film1645420034903
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{00,24,48,72}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
cd ..

cp nextSteps_1645420034903.sh film1645420034903/nextSteps.sh
cp mill004.js film1645420034903/mill004.js
