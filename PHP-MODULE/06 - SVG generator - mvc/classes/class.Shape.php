<?php

abstract class Shape {
    //propriétés
    protected $point;
    protected string $fillColor;
    protected  string $strikeColor;
    protected int $strokeWidth;
    protected float $opacity;
 
    
    
    public function __construct(int $x, int $y, string $fillColor, string $strikeColor, int $strokeWidth, float $opacity) {
        
         $this->point = new Point($x, $y);
         $this->fillColor = $fillColor;
         $this->strikeColor = $strikeColor;
         $this->strokeWidth = $strokeWidth;
         $this->opacity = $opacity;
    }
    
    abstract public function draw(string $name);
    
}