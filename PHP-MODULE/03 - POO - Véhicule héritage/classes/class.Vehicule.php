<?php

class Vehicule {
    
    //propriétés
    protected string $_brand;
    protected string $_model;
    protected string $_carType;
    protected string $_color;
    protected int $_power;
    protected string $_motorType;
    
    protected $Motor;

    

    //constructeur
    public function __construct(string $brand, string $model, string $carType, string $color, int $power, string $motorType, int $nbSpeed) {
        //init les propriétés
        $this->_brand = $brand;
        $this->_model = $model;
        $this->_carType = $carType;
        $this->_color = $color;
        $this->_power = $power;
        $this->_motorType = $motorType;
        
        //créer une instance de Speed
        $this->Motor = new Motor($nbSpeed);
        

    }
    
    //verification de la valeur
    /*
    declencher une erreur si le test n'est pas bon
    */
    protected function testValue($val,int $type) {
        
        //test si obligatoire
        if (empty($val)) {
            throw new DomainException('La valeur doit être non null'); 
        }
        switch($type) {
            case 0:
                //string
                if (!is_string($val)) {
                    throw new DomainException('La valeur doit une chaîne de caractères'); 
                }
                
                break;
                
            case 1:
                //int
                if (!is_int($val)) {
                    throw new DomainException('La valeur doit un entier'); 
                }
                
                break;
                
            case 2:
                //bool
                if (!is_bool($val)) {
                    throw new DomainException('La valeur doit un booléan'); 
                }
                break;
                
        }
    }
    
    //setter
    public function __set(string $prop, $val) {
        switch($prop) {
            
            case "brand":
                //test validité de la valeur
                $this->testValue($val, 0);
                    
            break;
            
            case "model":
                //test validité de la valeur
                $this->testValue($val, 0);
                    
            break;
            
            case "carType":
                //test validité de la valeur
                $this->testValue($val, 0);
                
            break;
            
            case "color":
                //test validité de la valeur
                $this->testValue($val, 0);
                
            break;
            
            case "power":
                //test validité de la valeur
                $this->testValue($val, 1);
                
            break;
            
            case "motorType":
                //test validité de la valeur
                $this->testValue($val, 0);
                
            break;
            
            default:
            throw new DomainException('Propriété introuvable ou en lecture seule');
      
        }
        
        //la valeur est correct, on peut la stocker 
        $attr = "_$prop";
        $this->$attr = $val;
        
    }
    
    //getter
    public function __get(string $prop) {
        switch($prop) {
            
            case "brand":
            case "model":
            case "carType":
            case "color":
            case "power":
            case "motorType":
                
            $attr = "_$prop";
            return $this->$attr;
              
            break;
            
            case "nbSpeed":
                
                return $this->Motor->nbSpeed;
                
                break;
            
            default:
            throw new DomainException('Propriété introuvable');
      
        }       
    }
    
    //actions sur le véhicule
    public function startMotor() {
        $this->Motor->start();
    }
    
    public function accelerateMotor(int $opt = 0) {
        $this->Motor->accelerate();
    }
    
    public function slowMotor(int $opt = 0) {
        $this->Motor->slow();
    }
    
    public function stepBackMotor(int $opt = 0) {
        $this->Motor->stepBack();
    }
    
    public function stopMotor() {
        $this->Motor->stop();
    }
    
}