<?php 

class Point {
    private int $_positionX;
    private int $_positionY;

    public function __construct(int $positionX, int $positionY)
    {
        $this->_positionX = $positionX;
        $this->_positionY = $positionY;
    }

       //getter
       public function __get(string $prop) {
        switch($prop) {
            case "positionX":
                return $this->_positionX;
                
                break;
                
            case "positionY":
                return $this->_positionY;
                
                break;
            
            default:
                throw new DomainException('Propriété introuvable');
      
        }       
    }

}