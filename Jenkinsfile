pipeline {
  agent any
  stages {
    stage('VersionOne') {
      steps {
        sh 'node --version'
      }
    }
    stage('VersionTwo') {
      steps {
        sh 'npm --version'
      }
    }
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
