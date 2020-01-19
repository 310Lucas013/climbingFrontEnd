pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        sh '''
        node --version
        npm --version
        install nodejs
        npm install'''
      }
    }
    stage('build') {
      steps {
        sh '''echo $PWD
              #!/bin/bash
              ng build --prod'''
      }
    }
  }
}
