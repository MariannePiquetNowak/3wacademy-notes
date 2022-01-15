<?php

require 'classes/traits/FormGenerator.php';

require 'classes/form/class.Form.php';



/*
bilan :
    - répétition au niveau du markup :
        - les inputs du même type
        - les name des inputs ne sont pas dynamiques
        
    - les formes sont pas dynamiques

*/
/*
mode opératoire :
    - un trait qui va nous proposer des méthodes et des propriétés
    - une class qui va utiliser ce trait 
    - un fichier de configuration
*/
/*
en fonction du type de form et de l'index de la forme, générer le markupHtml du formulaire
*/

if (
    !isset($_GET["shape"]) OR 
    !isset($_GET["index"]) OR 
    empty($_GET["shape"]) OR 
    !ctype_digit($_GET["index"])
    )
    {
        throw new DomainException('paramêtres incorrects !'); 
    }
    
    //init des données
    $shape = htmlspecialchars($_GET["shape"]);
    $i = intval($_GET["index"]);
    


require 'classes/Shape/init.php';

require 'classes/Shape/'.$shape.'/init.php';




//$definition : les params globaux, on additionne les 2 tableaux init global + init de la forme

$definition  = array_merge($definitionShape, $definition);



$myForm = new Form($definition, $i);


echo $myForm->render($shape);