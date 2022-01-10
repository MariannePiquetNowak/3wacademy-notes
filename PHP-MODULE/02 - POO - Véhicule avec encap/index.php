<?php

//inclure les déclarations des classes

//Vehicule
require 'classes/class.Vehicule.php';

//Speed
require 'classes/class.Motor.php';

//test du programme

//instance de l'objet

$car = new Vehicule("Renault", "Clio", "Citadine", "Rouge", 120, "Essence", 6);

$car->startMotor();

$car->accelerateMotor();
$car->accelerateMotor();
$car->accelerateMotor();

$car->slowMotor();
$car->slowMotor();
$car->slowMotor();

$car->stopMotor();

