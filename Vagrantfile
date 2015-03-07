$script = <<EOF
# Configure the package manager.
export DEBIAN_FRONTEND=noninteractive
sudo apt-get --quiet update

# Install dependencies.
sudo apt-get --quiet --assume-yes install git build-essential

# Install a ruby stack.
git clone https://github.com/sstephenson/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
git clone https://github.com/garnieretienne/rvm-download.git \
    ~/.rbenv/plugins/rvm-download
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
ruby_version=$(cat /vagrant/.ruby-version)
rbenv download $ruby_version
rbenv global $ruby_version
rbenv rehash
gem install bundler
rbenv rehash

# Install required gems.
cd /vagrant
bundle install
EOF

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 4567, host: 4567
  config.vm.provision "shell", inline: $script, privileged: false
end
