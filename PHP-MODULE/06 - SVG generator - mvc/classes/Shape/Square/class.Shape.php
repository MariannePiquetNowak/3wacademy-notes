<?php

namespace Square;

class Shape extends \Rectangle\Shape {
    
    public function __construct(int $x, int $y, string $fillColor, string $strikeColor, int $strokeWidth, float $opacity, int $width) {
        
        //appel du constructeur parent
        parent::__construct($x, $y, $fillColor, $strikeColor, $strokeWidth, $opacity, $width, $width);
        
    }
}