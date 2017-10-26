cd /home/app/techram;
git add -A;
git stash;
git reset HEAD ~1;
git pull;

pm2 delete techram;
pm2 start index.js --name techram;
# 	0 0 22 ? * THU *
