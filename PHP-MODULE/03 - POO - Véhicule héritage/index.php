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

$car = new AllRoad("Renault", "Kangoo", "Citadine", "Rouge", 120, "Essence", 6);

$car->startMotor();

$car->accelerateMotor();
$car->accelerateMotor();
$car->accelerateMotor();

$car->slowMotor();
$car->slowMotor();
$car->slowMotor();

$car->stopMotor();

