<?php

class Shape {
    protected string $_fillColor;
    protected string $_strokeColor;
    protected int $_strokeWidth;
    protected float $_opacity;

    protected $Point;


    public function __constructor(string $fillColor, string $strokeColor, int $strokeWidth, float $opacity, int $positionX, int $positionY)
    {
        $this->Point = new Point($positionX, $positionY);
        $this->_fillColor = $fillColor;
        $this->_strokeColor = $strokeColor;
        $this->_strokeWidth = $strokeWidth;
        $this->_opacity = $opacity;
    }

}