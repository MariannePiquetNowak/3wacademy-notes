<?php 

class Ellipse extends Shape {
    protected int $_rx;
    protected int $_ry;

    public function __construct(int $rx, int $ry, string $fillColor, string $strokeColor, int $strokeWidth, float $opacity, int $positionX, int $positionY)
    {
        parent::__constructor($fillColor, $strokeColor, $strokeWidth, $opacity, $positionX, $positionY);

        $this->_rx = $rx;
        $this->_ry = $ry;
    }
}