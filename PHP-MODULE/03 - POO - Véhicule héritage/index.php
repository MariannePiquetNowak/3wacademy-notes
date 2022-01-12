<?php

/* CREER UN HERITAGE POUR CONSTRUIRE UN OBJET 4X4 */


//inclure les déclarations des classes

// Vehicule
require 'classes/class.Vehicule.php';

// AllRoad (récupère tout ce que propose véhicule)
require 'classes/class.AllRoad.php';

// Speed
require 'classes/class.Motor.php';

//test du programme

//instance de l'objet

$car = new AllRoad("Renault", "Kangoo", "4x4", "Rouge", 120, "Essence", 6, 4);
$car->startMotor();

$car->accelerateMotor(1);

$car->accelerateMotor(1);

$car->slowMotor(1);

$car->slowMotor(1);



// Pour être arrêté, les 2 boites doivent être au point mort
$car->stopMotor();

// $car->startMotor();

// $car->accelerateMotor();
// $car->accelerateMotor();
// $car->accelerateMotor();

// $car->slowMotor();
// $car->slowMotor();
// $car->slowMotor();

// $car->stopMotor();

