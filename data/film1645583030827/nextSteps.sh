
cd film1645583030827
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwyr
rm *.png
cd ..
echo "file './film1645583030827/film.mp4'" >> filmfiles.txt 

cp nextSteps_1645583030827.sh film1645583030827/nextSteps.sh
cp mill011.js film1645583030827/mill011.js
