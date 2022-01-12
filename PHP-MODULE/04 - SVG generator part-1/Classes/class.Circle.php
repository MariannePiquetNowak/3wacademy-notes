<?php

class Circle extends Ellipse {

    public function __construct(int $rx, int $ry, string $fillColor, string $strokeColor, int $strokeWidth, float $opacity, int $positionX, int $positionY)
    {
    parent::__construct($rx, $ry, $fillColor, $strokeColor, $strokeWidth, $opacity, $positionX, $positionY);
        
        if($rx != $ry)
        {
            throw new DomainException("Le diamètre d'un cercle doit avoir 2 rayons égaux");
        }
    }    
}