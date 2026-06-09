pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/ferdinand4-jf/login-app.git'
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }

    }
}