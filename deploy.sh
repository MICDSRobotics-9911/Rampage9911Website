eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 deploy_rsa # Allow read access to the private key
ssh-add deploy_rsa # Add the private key to SSH

git config --global push.default matching
git remote add deploy ssh://git@$IP:$PORT$DEPLOY_DIR
git push deploy master