for d in $(ls -d score*/)
do 
	echo "$d"
	cd $d
	magick convert film_000/frame000124.pdf -resize 1920 poster.png
	n=0
	for f in $(ls -d film_*/)
	do
		echo $f
		magick convert $f/frame000248.pdf -resize 1920 poster_$n.png
		((n=n+1))
	done
	echo "done $d"
	cd ..
done
