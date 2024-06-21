// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function myButtonClicked() {
  // variables
  const NUMERATOR = 4
  let denominator = 1
  let answer = NUMERATOR / denominator
  let operator = 1
  let output = " (4 / 1)"
  document.getElementById("output").innerHTML = ""
  document.getElementById("answer").innerHTML = ""

  // input
  const numberOfTimes = parseInt(document.getElementById("number-of-times").value)
  if (isNaN(numberOfTimes)) {
    document.getElementById("output").innerHTML = "Please enter a valid number."
    return
  }

  // process
  for (let counter = 1; counter < numberOfTimes; counter++) {
    operator *= -1
    denominator += 2
    answer += (operator * NUMERATOR) / denominator
    if (operator < 0) {
      output += " - " + "(" + NUMERATOR + " / " + denominator + ")"
    } else {
      output += " + " + "(" + NUMERATOR + " / " + denominator + ")"
    }
  }

  // output
  document.getElementById("output").innerHTML = output
  document.getElementById("answer").innerHTML = " = " + answer
}
