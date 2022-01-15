<?php

//gere directement les require des class
require 'autoload.php';



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

//entête pour indiquer qu'il s'agit d'un fichier svg généré
header('Content-Type: image/svg+xml');

echo $mySvg->render();



