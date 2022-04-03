for f in film_000 film_001 film_002 film_003 film_start film_end film_extra
do
	cd $f
	pdfunite $(ls frame*{24,48,72,96}.pdf) book.pdf
	cd ..
done
