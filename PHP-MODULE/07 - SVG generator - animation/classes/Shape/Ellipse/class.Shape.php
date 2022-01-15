<?php

namespace Ellipse;

class Shape extends \Shape {
    //propriétés supplémentaires
    protected int $rx;
    protected int $ry;
    
    public function __construct(int $x, int $y, string $fillColor, string $strikeColor, int $strokeWidth, float $opacity, int $rx, int $ry, bool $anim) {
        
        //appel du constructeur parent
        parent::__construct($x, $y, $fillColor, $strikeColor, $strokeWidth, $opacity);
        
        //setting pour l'ellipse
        $this->rx = $rx;
        $this->ry = $ry;
        
        if ($anim) {
           $this->animate = new \Animate(); //propriété dynamique
        }
        
    }
    
    public function draw(string $name):string {
        
        //les coordonnées de position de la forme
        $point = $this->point->getPosition();
        
        
        
        //récupérer le template de ellipse dans un tableau
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
        $content = str_replace("{{Rx}}", $this->rx, $content);
        $content = str_replace("{{Ry}}", $this->ry, $content);
        $content = str_replace("{{FillColor}}", $this->fillColor, $content);
        $content = str_replace("{{StrokeColor}}", $this->strikeColor, $content);
        $content = str_replace("{{StrockeWidth}}", $this->strokeWidth, $content);
        $content = str_replace("{{Opacity}}", $this->opacity, $content);
        
        
        //test si la propriété $this->animate existe 
        if (isset($this->animate)) {
            
        //récupérer les paramètres de l'animation
        $paramsAnim = $this->animate->getParams();
        
          $file = file("./classes/Shape/".$name."/animation.phtml");
        
        $contentAnim = "";
        
        //parcours du tableau
        foreach($file as $line) {
            $contentAnim .= $line;
        }
        
        //remplacer les occurences d'animations
        foreach($paramsAnim as $key => $value) {
           $contentAnim = str_replace("{{".$key."}}", $value, $contentAnim); 
        }
        
        $content = str_replace("{{animation}}", $contentAnim, $content);  
        }
        else {
         $content = str_replace("{{animation}}", "", $content);     
        }
        
        
        return $content;

    }
}