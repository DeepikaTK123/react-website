pipeline {
    agent any

    environment {
        NODE_ENV = "production"
        NVM_DIR = "${HOME}/.nvm"
    }

    stages {
        stage('Check Node & npm') {
            steps {
                sh '''
                    echo "Checking node and npm..."
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                      . "$NVM_DIR/nvm.sh"
                      nvm use 20
                      which node
                      which npm
                      node -v
                      npm -v
                    else
                      echo "NVM not found"
                      exit 1
                    fi
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                      . "$NVM_DIR/nvm.sh"
                      nvm use 20
                      npm install
                    else
                      echo "NVM not found"
                      exit 1
                    fi
                '''
            }
        }

        stage('RUN') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    if [ -s "$NVM_DIR/nvm.sh" ]; then
                      . "$NVM_DIR/nvm.sh"
                      nvm use 20
                      npm run start
                    else
                      echo "NVM not found"
                      exit 1
                    fi
                '''
            }
        }
    }

    post {
        success {
            echo '🎉 Build succeeded!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
