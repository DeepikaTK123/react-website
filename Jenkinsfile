pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        

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
