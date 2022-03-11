
cd film1645566172251
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwr
rm *.png
cd ..
echo "file './film1645566172251/film.mp4'" >> filmfiles.txt 

cp nextSteps_1645566172251.sh film1645566172251/nextSteps.sh
cp mill010.js film1645566172251/mill010.js
