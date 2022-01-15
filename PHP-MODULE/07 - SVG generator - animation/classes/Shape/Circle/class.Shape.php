<?php

namespace Circle;

class Shape extends \Ellipse\Shape {

    public function __construct(int $x, int $y, string $fillColor, string $strikeColor, int $strokeWidth, float $opacity, int $r, bool $anim) {
        
        //appel du constructeur parent
        parent::__construct($x, $y, $fillColor, $strikeColor, $strokeWidth, $opacity, $r, $r, $anim);
        
    }
}