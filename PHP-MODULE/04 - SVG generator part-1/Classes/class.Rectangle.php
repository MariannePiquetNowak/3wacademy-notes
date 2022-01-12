<?php

class Rectangle extends Shape {
    private int $_width;
    private int $_height;

    public function __construct(int $width, int $height, string $fillColor, string $strokeColor, int $strokeWidth, float $opacity, int $positionX, int $positionY)
    {
        parent::__constructor($fillColor, $strokeColor, $strokeWidth, $opacity, $positionX, $positionY);

        $this->_width = $width;
        $this->_height = $height;
    }
}