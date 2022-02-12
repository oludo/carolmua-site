server:
	hugo serve --bind=192.168.1.6 --baseURL=http://192.168.1.6:1313

compressall:
	cd static/images/originals && mogrify -quality 20 -path ../ *.jpg

compress:
		cd static/images && convert originals/national.jpg -quality 50 -resize 400x600 national.jpg
