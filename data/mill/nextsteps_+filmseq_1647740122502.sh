
	cd film_0
	for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
	for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
	pdfunite film*{24,48,72,96}.pdf book.pdf
	ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
	rm *.png
	cd ..
	echo "file './film_0/film.mp4'" >> filmfiles.txt 
	
	cd film_1
	for file in *.pdf; do magick convert $file -resize 1920 $file.png; done;
	for file in *pdf.png; do mv "$file" "${file/.pdf.png/.png}"; done;
	pdfunite film*{24,48,72,96}.pdf book.pdf
	ffmpeg -framerate 24 -i film%06d.png -c:v libx264 -r 24 -pix_fmt yuv420p film.mp4
	rm *.png
	cd ..
	echo "file './film_1/film.mp4'" >> filmfiles.txt 
	
cp nextsteps_+filmseq_1647740122502.sh filmseq_1647740122502/nextsteps.sh
cp mill.js filmseq_1647740122502/mill.js
