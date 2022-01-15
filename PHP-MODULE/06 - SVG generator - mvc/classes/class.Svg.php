<?php

class Svg {
    //propriétés
    private int $width;
    private int $height;
    private string $bckColor;
    private array $listShapes = [];
    
    public function __construct(int $width, int $height, string $bckColor) {
        //traitement -> setting des propriétés
        
        $this->width = $width;
        $this->height = $height;
        $this->bckColor = $bckColor;
        
    }
    
    
    //ajouter une forme au tableau 
    //si $shape n'est pas un object Shape, une erreur sera déclenchée
    public function addShape(Shape $shape) {
        array_push($this->listShapes, $shape);
    }
    
    //variante
    public function addShapeBis(string $type, ...$opt) {
        
        $type = "\\".$type."\Shape";
        //test si la classe $type existe
        if (!class_exists($type)) {
            throw new LogicException("Unable to load class: $type");
        }
        
        /*
        
        */
        array_push($this->listShapes, new $type(...$opt)); //les ... permettent de décomposer chaque ligne de $opt (tableau)
        
    }
    
    //rendu du svg
    //renvoie le markup html de l'svg
    public function render():string {
        $svgMarkup = '<?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.$this->width.'px" height="'.$this->height.'px" style="background-color:'.$this->bckColor.'">';
        //rajouter les formes
        
        foreach($this->listShapes as $shape) {
           
            //récupérer le nom de la forme
            $shapeName = strstr(get_class($shape),"\Shape",true);

           $svgMarkup .= $shape->draw($shapeName);
        }
        
        $svgMarkup .='</svg>';
        
        return $svgMarkup;
    }
}