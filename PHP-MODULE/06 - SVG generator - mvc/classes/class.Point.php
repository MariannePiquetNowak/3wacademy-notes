<?php

class Point {
    //propriétés
    private int $posX;
    private int $posY;
    
    public function __construct(int $x, int $y) {
        $this->posX = $x;
        $this->posY = $y;
    }
    
    //renvoyer le couple posX / posY
    public function getPosition():array {
        return [
            'posX' => $this->posX,
            'posY' => $this->posY
            ];
    }
}