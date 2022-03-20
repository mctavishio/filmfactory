
cd film_bwxxxx_1647108538514
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwxxxx
rm *.png
cd ..
echo "file './film_bwxxxx_1647108538514/film.mp4'" >> filmfiles.txt 

cp nextsteps_mctavish.sh film_bwxxxx_1647108538514/nextSteps.sh
cp mill013.js film_bwxxxx_1647108538514/mill013.js
