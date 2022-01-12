<?php

class Square extends Rectangle {
    
    public function __construct(int $width, int $height, string $fillColor, string $strokeColor, int $strokeWidth, float $opacity, int $positionX, int $positionY)
    {
        parent::__construct($width, $height, $fillColor, $strokeColor, $strokeWidth, $opacity, $positionX, $positionY);

        // Mise en place du test 
        // Si c'est un carré, sa width doit être strictement égal à sa height
        if($width != $height){
            throw new DomainException("Les côtés d'un carré doivent être égaux");
        }
    }
 
}