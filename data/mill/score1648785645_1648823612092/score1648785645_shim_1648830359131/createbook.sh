for f in film_shim
do
	cd $f
	pdfunite $(ls frame*{24,48,72,96}.pdf) book.pdf
	cd ..
done
