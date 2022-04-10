sed 's/$/<br\/>/' test.txt > test.txt.tmp
sed 's/
# note that ^L from word is ::: Enter the ^L using ctrl-V ctrl-L
# from https://stackoverflow.com/questions/14236143/deleting-form-feed-l-characters
sed 's/^L/<\/article>\n<article>/' test.txt.tmp > test2.txt.tmp
# whitespace
# sed 's/^[[:space:]]*//g'
# sed 's/^ *//g'
sed 's/[[:space:]]*$//g' test2.txt.tmp > test3.txt.tmp
sed 's/[[:space:]]*<br\/>/<br\/>/g' test3.txt.tmp > test4.txt.tmp
