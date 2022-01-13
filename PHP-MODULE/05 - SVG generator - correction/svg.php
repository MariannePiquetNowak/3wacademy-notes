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


// var_dump($_POST); // Récupère les données du formulaire 
/* Pour récupérer les données du form, 
il suffit d'ajouter dans <form action="le fichier container" method="POST >
*/

/*
/var/www/html/cours-3wacademy/PHP-MODULE/05 - SVG generator - correction/svg.php:18:
array (size=33)
  'svgWidth' => string '100' (length=3)
  'svgHeight' => string '100' (length=3)
  'svgColor' => string '#000000' (length=7)
  'rectX' => string '' (length=0)
  'rectY' => string '' (length=0)
  'rectWidth' => string '' (length=0)
  'rectHeight' => string '' (length=0)
  'rectFillColor' => string '#000000' (length=7)
  'rectStrockeWidth' => string '' (length=0)
  'rectStrokeColor' => string '#000000' (length=7)
  'rectOpacity' => string '1' (length=1)
  'squareX' => string '' (length=0)
  'squareY' => string '' (length=0)
  'squareWidth' => string '' (length=0)
  'squareFillColor' => string '#000000' (length=7)
  'squareStrockeWidth' => string '' (length=0)
  'squareStrokeColor' => string '#000000' (length=7)
  'squareOpacity' => string '1' (length=1)
  'ellipseX' => string '' (length=0)
  'ellipseY' => string '' (length=0)
  'ellipseRx' => string '' (length=0)
  'ellipseRy' => string '' (length=0)
  'ellipseFillColor' => string '#000000' (length=7)
  'ellipseStrockeWidth' => string '' (length=0)
  'ellipseStrokeColor' => string '#000000' (length=7)
  'ellipseOpacity' => string '1' (length=1)
  'circleX' => string '' (length=0)
  'circleY' => string '' (length=0)
  'circleR' => string '' (length=0)
  'circleFillColor' => string '#000000' (length=7)
  'circleStrockeWidth' => string '' (length=0)
  'circleStrokeColor' => string '#000000' (length=7)
  'circleOpacity' => string '1' (length=1)
*/
/*
//instance de Svg
$mySvg = new Svg(400, 200, '#eee');

  //instance de Svg
  $mySvg = new Svg(intval($_POST["svgWidth"]), intval($_POST["svgHeight"]), $_POST["svgColor"]);


  //le rectangle 
  $prefix = "rect";
  $mySvg->addShapeBis('Rectangle',intval($_POST[$prefix."X"]), intval($_POST[$prefix."Y"]), $_POST[$prefix."FillColor"], $_POST[$prefix."StrokeColor"], $_POST[$prefix."StrockeWidth"], $_POST[$prefix."Opacity"], intval($_POST[$prefix."Width"]), intval($_POST[$prefix."Height"]));
  
  //le carré
  $prefix = "square";
  $mySvg->addShapeBis('Square',intval($_POST[$prefix."X"]), intval($_POST[$prefix."Y"]), $_POST[$prefix."FillColor"], $_POST[$prefix."StrokeColor"], $_POST[$prefix."StrockeWidth"], $_POST[$prefix."Opacity"], intval($_POST[$prefix."Width"]));
  
  //l'ellipse 
  $prefix = "ellipse";
  $mySvg->addShapeBis('Ellipse',intval($_POST[$prefix."X"]), intval($_POST[$prefix."Y"]), $_POST[$prefix."FillColor"], $_POST[$prefix."StrokeColor"], $_POST[$prefix."StrockeWidth"], $_POST[$prefix."Opacity"], intval($_POST[$prefix."Rx"]), intval($_POST[$prefix."Ry"]));
  
  //le cercle
  $prefix = "circle";
  $mySvg->addShapeBis('Circle',intval($_POST[$prefix."X"]), intval($_POST[$prefix."Y"]), $_POST[$prefix."FillColor"], $_POST[$prefix."StrokeColor"], $_POST[$prefix."StrockeWidth"], $_POST[$prefix."Opacity"], intval($_POST[$prefix."R"]));
  
*/
/********** Tests à faire du $_POST  **********************/ 

//tests à faire sur $_POST
if(! isset($_POST["shape"]) OR ! is_array($_POST["shape"])) {
    throw new DomainException('Gereration du SVG impossible !');
}
  
//test si on peut définir le SVG
    if (
        !isset($_POST["svgWidth"]) OR 
        !isset($_POST["svgHeight"]) OR 
        !isset($_POST["svgColor"]) OR 
        !ctype_digit($_POST["svgWidth"]) OR 
        !ctype_digit($_POST["svgHeight"]) OR 
        empty($_POST["svgColor"])
    )
    {
       throw new DomainException('paramêtres SVG incorrect !'); 
    }
  //instance de Svg
    $mySvg = new Svg(intval($_POST["svgWidth"]), intval($_POST["svgHeight"]), htmlspecialchars($_POST["svgColor"]));

foreach($_POST["shape"] as $key => $value) {
    
    //construction du prefix
    $prefix = "shape".$key;
    
    //test sur les variables communes
    if (
        !isset($_POST[$prefix."X"]) OR 
        !isset($_POST[$prefix."Y"]) OR 
        !isset($_POST[$prefix."FillColor"]) OR 
        !isset( $_POST[$prefix."StrokeColor"]) OR 
        !isset($_POST[$prefix."StrockeWidth"]) OR 
        !isset($_POST[$prefix."Opacity"]) OR  
        !ctype_digit($_POST[$prefix."X"]) OR 
        !ctype_digit($_POST[$prefix."Y"]) OR 
        !ctype_digit($_POST[$prefix."StrockeWidth"])
        )
        {
       throw new DomainException('paramêtres communs de la forme incorrect !'); 
    }
    
    //dans le switch on va définir les options en fonction de la forme
    switch($value) {
        
        case "Rectangle":
            //test sur les champs
            if (
                !isset($_POST[$prefix."Width"]) OR 
                !isset($_POST[$prefix."Height"]) OR 
                !ctype_digit($_POST[$prefix."Width"]) OR 
                !ctype_digit($_POST[$prefix."Height"])
                )
                {
               throw new DomainException('paramêtres du rectangle incorrect !'); 
            }
            
            $opt = [
                'Rectangle',
                intval($_POST[$prefix."X"]), 
                intval($_POST[$prefix."Y"]), 
                $_POST[$prefix."FillColor"], 
                $_POST[$prefix."StrokeColor"], 
                $_POST[$prefix."StrockeWidth"], 
                $_POST[$prefix."Opacity"], 
                intval($_POST[$prefix."Width"]), 
                intval($_POST[$prefix."Height"])
                ];
            break;
            
        case "Square":
            //test sur les champs
            if (
                !isset($_POST[$prefix."Width"]) OR 
                !ctype_digit($_POST[$prefix."Width"])
                )
                {
               throw new DomainException('paramêtres du carré incorrect !'); 
            }
            
            $opt = [
                'Square',
                intval($_POST[$prefix."X"]), 
                intval($_POST[$prefix."Y"]), 
                $_POST[$prefix."FillColor"], 
                $_POST[$prefix."StrokeColor"], 
                $_POST[$prefix."StrockeWidth"], 
                $_POST[$prefix."Opacity"], 
                intval($_POST[$prefix."Width"])
                ];
            break;
            
        case "Ellipse":
            //test sur les champs
            if (
                !isset($_POST[$prefix."Rx"]) OR 
                !isset($_POST[$prefix."Ry"]) OR 
                !ctype_digit($_POST[$prefix."Rx"]) OR 
                !ctype_digit($_POST[$prefix."Ry"])
                )
                {
               throw new DomainException('paramêtres de ellipse incorrect !'); 
            }
            
            $opt = [
                'Ellipse',
                intval($_POST[$prefix."X"]), 
                intval($_POST[$prefix."Y"]), 
                $_POST[$prefix."FillColor"], 
                $_POST[$prefix."StrokeColor"], 
                $_POST[$prefix."StrockeWidth"], 
                $_POST[$prefix."Opacity"], 
                intval($_POST[$prefix."Rx"]), 
                intval($_POST[$prefix."Ry"])
                ];
            
            break;
            
        case "Circle":
            //test sur les champs
            if (
                !isset($_POST[$prefix."R"]) OR 
                !ctype_digit($_POST[$prefix."R"])
                )
                {
               throw new DomainException('paramêtres du cercle incorrect !'); 
            }
            
            $opt = [
                'Circle',
                intval($_POST[$prefix."X"]), 
                intval($_POST[$prefix."Y"]), 
                $_POST[$prefix."FillColor"], 
                $_POST[$prefix."StrokeColor"], 
                $_POST[$prefix."StrockeWidth"], 
                $_POST[$prefix."Opacity"], 
                intval($_POST[$prefix."R"])
                ];
            
            break;
            
        default:
           throw new DomainException('Forme inconnue !'); 
    }
    
    //ajouter la forme
    $mySvg->addShapeBis(...$opt);
    
}

/********** FIN  **********************/ 

//entête pour indiquer qu'il s'agit d'un fichier svg généré
header('Content-Type: image/svg+xml');

// Rend dans la vue
echo $mySvg->render();


//création d'une forme
//$myShape = new Square(10, 20, 'red', '', 0, 0.5, 200);

//ajouter cette forme dans le svg
//$mySvg->addShape($myShape);

//création d'une forme
//$myShape = new Circle(10, 20, 'red', 'pink', 2, 0.5, 100);

//ajouter cette forme dans le svg
//$mySvg->addShape($myShape);

// var_dump(new Circle(10, 20, 'red', 'pink', 2, 0.5, 100));

// $mySvg->addShapeBis('Rectangle',10, 20, 'red', 'pink', 2, 0.5, 100, 200);

// $mySvg->addShapeBis('Square',10, 20, 'blue', 'black', 2, 0.5, 50);

// $mySvg->addShapeBis('Circle',100, 100, 'yellow', 'black', 2, 1, 100);

// // en-tête (header) pour indiquer qu'il s'agit d'un fichier svg généré
// header('Content-Type: image/svg+xml');

// echo $mySvg->render();
