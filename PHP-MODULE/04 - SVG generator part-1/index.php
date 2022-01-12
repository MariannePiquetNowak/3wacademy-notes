<?php

require 'Containers/class.Svg.php';

require 'Controllers/class.Point.php';
require 'Controllers/class.Shape.php';

require 'Classes/class.Rectangle.php';
require 'Classes/class.Square.php';
require 'Classes/class.Ellipse.php';
require 'Classes/class.Circle.php';

$svg = new Svg(100, 200);
var_dump($svg);

$rectangle = new Rectangle(40, 40, "yellow", "black", 0, 1, 50, 50);
// var_dump($rectangle);

// Test pour savoir si l'exception est ok
$square = new Square(40, 40, "red", "none", 0, 1, 50, 50);
// var_dump($square);

$ellipse = new Ellipse(100, 40, "blue", "black", 0, 1, 100, 50);
// var_dump($ellipse);

// Test pour savoir si l'exception est ok
$circle = new Circle(40, 40, "blue", "black", 0, 1, 100, 50);
$circle2 = new Circle(80, 80, "blue", "black", 0, 1, 100, 50);
// var_dump($circle);


// Test d'ajout de plusieurs formes dans le container Svg
var_dump($svg->add($rectangle, $circle, $ellipse, $circle2));