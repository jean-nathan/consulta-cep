
# Alterar a Versão do Node.js para 12.22.9 usando NVM antes de seguir os readme do front-end e back-end

# No Linux/macOS usando NVM

# 1. Instalar o NVM (caso não esteja instalado)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Siga as instruções fornecidas após a instalação para ativar o NVM no seu terminal.

# 2. Instalar e usar a versão 12.22.9
nvm install 12.22.9
nvm use 12.22.9

# No Windows usando NVM-Windows

# 1. Baixar e Instalar o NVM-Windows (via PowerShell)
iwr https://github.com/coreybutler/nvm-windows/releases/latest/download/nvm-setup.zip -OutFile nvm-setup.zip
Expand-Archive nvm-setup.zip -DestinationPath $env:USERPROFILE\.nvm
cd $env:USERPROFILE\.nvm

# Execute o instalador interativo
.\nvm-setup

# 2. Instalar e usar a versão 12.22.9
nvm install 12.22.9
nvm use 12.22.9

# Verificar a Versão do Node.js
node -v
