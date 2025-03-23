pipeline {
    agent any

    tools {
        nodejs "node20"  // match the name you used above
    }

    environment {
        NODE_ENV = "production"
    }

    stages {
        stage('Check Node & npm') {
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

        stage('Checkout') {
            steps {
                git url: 'https://github.com/DeepikaTK123/react-website.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
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
