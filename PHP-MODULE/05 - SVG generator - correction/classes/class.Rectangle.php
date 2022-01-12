<?php

class Rectangle extends Shape {
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
    
    public function draw():string {
        
        $point = $this->point->getPosition();
        
        return '<rect x="'.$point['posX'].'" y="'.$point['posY'].'" width="'.$this->width.'" height="'.$this->height.'" fill="'.$this->fillColor.'" stroke="'.$this->strikeColor.'" stroke-width="'.$this->strokeWidth.'"  opacity="'.$this->opacity.'" />';
    }
}