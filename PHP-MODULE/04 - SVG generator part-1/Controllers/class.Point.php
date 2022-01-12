<?php 

class Point {
    private int $_positionX;
    private int $_positionY;

    public function __construct(int $positionX, int $positionY)
    {
        $this->_positionX = $positionX;
        $this->_positionY = $positionY;
    }
}