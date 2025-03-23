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
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # Load nvm
                    nvm use 20
                    which node
                    which npm
                    node -v
                    npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                    nvm use 20
                    npm install
                '''
            }
        }

        stage('RUN') {
            steps {
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                    nvm use 20
                    npm run start
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
