<?php
//les classes
require 'classes/class.Svg.php';
require 'classes/class.Point.php';
require 'classes/class.Shape.php';
require 'classes/class.Rectangle.php';
require 'classes/class.Square.php';
require 'classes/class.Ellipse.php';
require 'classes/class.Circle.php';



//traitement

//instance de Svg
$mySvg = new Svg(400, 200, '#eee');

//création d'une forme
//$myShape = new Square(10, 20, 'red', '', 0, 0.5, 200);

//ajouter cette forme dans le svg
//$mySvg->addShape($myShape);


//création d'une forme
//$myShape = new Circle(10, 20, 'red', 'pink', 2, 0.5, 100);

//ajouter cette forme dans le svg
//$mySvg->addShape($myShape);

$mySvg->addShapeBis('Rectangle',10, 20, 'red', 'pink', 2, 0.5, 100, 200);

$mySvg->addShapeBis('Square',10, 20, 'blue', 'black', 2, 0.5, 50);

$mySvg->addShapeBis('Circle',100, 100, 'yellow', 'black', 2, 1, 100);

echo $mySvg->render();

