pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {


        stage('Check files') {
            steps {
                sh '''
                    echo "Checking node and npm..."
                    which node
                    which npm
                    node -v
                    npm -v
                '''
            }
        }

        
        

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                // or use: sh 'yarn install'
            }
        }

        
        stage('Start') {
            steps {
                sh 'npm run start'
                // or use: sh 'yarn build'
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
