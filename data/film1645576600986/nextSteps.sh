
cd film1645576600986
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bw
rm *.png
cd ..
echo "file './film1645576600986/film.mp4'" >> filmfiles.txt 

cp nextSteps_1645576600986.sh film1645576600986/nextSteps.sh
cp textmill000.js film1645576600986/textmill000.js
