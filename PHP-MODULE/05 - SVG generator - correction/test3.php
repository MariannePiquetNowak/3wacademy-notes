<?php

// Fichier contenant la "génération" html des champs répétitifs
require 'classes/traits/FormGenerator.php';

// Utilise FormGenerator afin de rendre dans la view les champs du formulaire
require 'classes/form/class.Form.php';

// Fichier contenant les tableaux des props des formes qui seront envoyé dans la boucle de champs de FormGenerator
require 'init/index.php';


//init
$shape = "Rectangle";
$i = 0;

/*
${$shape} équivaut ici à $Rectanle qui est créé dans init/index.php
C'est ce que l'on appelle une variable dynamique. 
*/


// $globalShape : contient les params globaux dans init/index.php
${$shape} = array_merge($globalShape, ${$shape});

var_dump(${$shape}); // Renvoi le tableau de la forme initialisé dans $shape

$myForm = new Form(${$shape}, $i);



echo $myForm->render();

