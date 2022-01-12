<?php

class Ellipse extends Shape {
    //propriétés supplémentaires
    protected int $rx;
    protected int $ry;
    
    public function __construct(int $x, int $y, string $fillColor, string $strikeColor, int $strokeWidth, float $opacity, int $rx, int $ry) {
        
        //appel du constructeur parent
        parent::__construct($x, $y, $fillColor, $strikeColor, $strokeWidth, $opacity);
        
        //setting pour l'ellipse
        $this->rx = $rx;
        $this->ry = $ry;
    }
    
    public function draw():string {
        
        $point = $this->point->getPosition();
        
        return '<ellipse cx="'.$point['posX'].'" cy="'.$point['posY'].'" rx="'.$this->rx.'" ry="'.$this->ry.'" fill="'.$this->fillColor.'" stroke="'.$this->strikeColor.'" stroke-width="'.$this->strokeWidth.'"  opacity="'.$this->opacity.'" />';
    }
}