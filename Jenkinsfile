pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        sh 'npm install'
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
