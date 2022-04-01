echo -n "directory to upload ::: "
read dir
gsutil -m cp -r $dir gs://filmfactory/
gsutil ls gs://filmfactory/
echo "done uloading $dir"
