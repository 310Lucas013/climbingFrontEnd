pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        sh '''
        echo node --version
        echo npm --version
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
