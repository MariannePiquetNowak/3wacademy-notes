<?php

namespace Rectangle;

class Shape extends \Shape {
    //propriétés supplémentaires
    protected int $width;
    protected int $height;
    
    
    public function __construct(int $x, int $y, string $fillColor, string $strikeColor, int $strokeWidth, float $opacity, int $width, int $height) {
        
        //appel du constructeur parent
        parent::__construct($x, $y, $fillColor, $strikeColor, $strokeWidth, $opacity);
        
        //setting pour le rectangle
        $this->width = $width;
        $this->height = $height;
    }
    
    static public function getDefinitionShape() {
        return $this->definitionShape;
    }
    
    public function draw(string $name):string {
        
        $point = $this->point->getPosition();
        
        //récupérer le template du Rectangle dans un tableau
        $file = file("./classes/Shape/".$name."/view.phtml");
        
        //une variable qui va contenir l'ensemble des lignes de mon fichier
        $content = "";
        
        //parcours du tableau
        foreach($file as $line) {
            $content .= $line;
        }
        
        //remplacer les occurrences par les bonnes valeurs
        $content = str_replace("{{X}}", $point['posX'], $content);
        $content = str_replace("{{Y}}", $point['posY'], $content);
        $content = str_replace("{{Width}}", $this->width, $content);
        $content = str_replace("{{Height}}", $this->height, $content);
        $content = str_replace("{{FillColor}}", $this->fillColor, $content);
        $content = str_replace("{{StrokeColor}}", $this->strikeColor, $content);
        $content = str_replace("{{StrockeWidth}}", $this->strokeWidth, $content);
        $content = str_replace("{{Opacity}}", $this->opacity, $content);
        
        return $content;
    }
}