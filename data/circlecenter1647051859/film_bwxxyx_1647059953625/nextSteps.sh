
cd film_bwxxyx_1647059953625
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwxxyx
rm *.png
cd ..
echo "file './film_bwxxyx_1647059953625/film.mp4'" >> filmfiles.txt 

cp nextSteps_1647059953625.sh film_bwxxyx_1647059953625/nextSteps.sh
cp mill013.js film_bwxxyx_1647059953625/mill013.js
