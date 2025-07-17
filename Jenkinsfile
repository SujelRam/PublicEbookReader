pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Pull code from GitHub
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        // Install npm packages
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        // Run tests (if defined in package.json)
        sh 'npm test'
      }
    }
  }
}
