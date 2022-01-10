<?php
/************ POO SANS ENCAPSULATION ************/

// inclure les déclarations des classes

// Vehicule
require 'classes/class.Vehicule.php';

// TEST DU PROG

// Instance de l'objet
$car = new Vehicule("Renault", "Clio", "Citadine", "Rouge", 120, "Essence", false, 6);

// Démarrage du vehicule
$car->start();

$car->accelerate();

$car->accelerate();

$car->accelerate();

$car->slow();

$car->slow();

$car->slow();

$car->stepBack();

$car->accelerate();

$car->stop();

