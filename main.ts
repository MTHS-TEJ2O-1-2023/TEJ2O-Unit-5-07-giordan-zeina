/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Nov 2023
 * This program turns a servo motor from 0 degrees to 180 degrees
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Happy)

// when button A is pressed turns motor to 0 degrees
input.onButtonPressed(Button.A, function () {
  robotbit.Servo(servoNumber1, 0)
  basic.clearScreen()
  basic.showString('0')
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})

// when button B is pressed turns motor to 180 degrees
input.onButtonPressed(Button.B, function () {
  robotbit.Servo(servoNumber1, 180)
  basic.clearScreen()
  basic.showString('180')
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
