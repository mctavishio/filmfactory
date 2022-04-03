for d in $(ls -d score*/)
do 
	echo "$d"
	cd $d
	for f in $(ls -d film_*/)
	do
		cd $f
		echo $f
		pdfunite $(ls frame*{24,48,72,96}.pdf) book.pdf
		cd ..
	done
	echo "done $d"
	cd ..
done
