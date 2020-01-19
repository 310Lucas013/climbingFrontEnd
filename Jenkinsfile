pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        sh 'install nodejs'
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
