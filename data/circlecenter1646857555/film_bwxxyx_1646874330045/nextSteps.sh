
cd film_bwxxyx_1646874330045
for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
pdfunite film*{24,48,72,96}.pdf book.pdf
ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
touch pigments_bwxxyx
rm *.png
cd ..
echo "file './film_bwxxyx_1646874330045/film.mp4'" >> filmfiles.txt 

cp nextSteps_1646874330045.sh film_bwxxyx_1646874330045/nextSteps.sh
cp mill012_bwxxyx.js film_bwxxyx_1646874330045/mill012_bwxxyx.js
