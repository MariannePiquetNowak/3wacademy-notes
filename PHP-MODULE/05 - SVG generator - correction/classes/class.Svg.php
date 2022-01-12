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
        $svgMarkup = '<svg width="'.$this->width.'px" height="'.$this->height.'px" style="background-color:'.$this->bckColor.'">';
        //rajouter les formes
        
        foreach($this->listShapes as $shape) {
           $svgMarkup .= $shape->draw();
        }
        
        $svgMarkup .='</svg>';
        
        return $svgMarkup;
    }
}