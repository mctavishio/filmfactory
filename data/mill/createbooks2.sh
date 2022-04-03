for d in $(ls -d score*/)
do 
	echo "$d"
	cd $d
	pdfunite film_000/book.pdf film_001/book.pdf film_002/book.pdf film_003/book.pdf film_start/book.pdf film_end/book.pdf book.pdf
	echo "done $d"
	cd ..
done
