#！ /bin/bash
cd /projects/dodo-blog

git checkout .

git pull

pm2 restart blog
