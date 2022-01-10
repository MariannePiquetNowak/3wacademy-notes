<?php

class Vehicule {
    
    //propriétés
    private string $_brand;
    private string $_model;
    private string $_carType;
    private string $_color;
    private int $_power;
    private string $_motor;
    private bool $_speed;
    private int $_nbSpeed;
    
    private bool $is_start = false;
    private int $_gear = 0;
    

    //constructeur
    public function __construct(string $brand, string $model, string $carType, string $color, int $power, string $motor, bool $speed, int $nbSpeed) {
        //init les propriétés
        $this->_brand = $brand;
        $this->_model = $model;
        $this->_carType = $carType;
        $this->_color = $color;
        $this->_power = $power;
        $this->_motor = $motor;
        $this->_speed = $speed;
        $this->_nbSpeed = $nbSpeed;
    }
    
    //verification de la valeur
    /*
    declencher une erreur si le test n'est pas bon
    */
    private function testValue($val,int $type) {
        
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
            
            case "motor":
                //test validité de la valeur
                $this->testValue($val, 0);
                
            break;
            
            case "speed":
                //test validité de la valeur
                $this->testValue($val, 2);
                
            break;
            
            case "nbSpeed":
                //test validité de la valeur
                $this->testValue($val, 1);
              
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
            case "motor":
            case "speed":
            case "nbSpeed":
                
            $attr = "_$prop";
            return $this->$attr;
              
            break;
            
            default:
            throw new DomainException('Propriété introuvable');
      
        }       
    }
    
    //actions sur le véhicule
    
    //démarrage du véhicule
    public function start() {
        if ($this->is_start) {
            throw new DomainException('Moteur déjà demarré !');
        }
        
        $this->is_start = true;
    }
    
    //provoque une erreur si la voiture n'est pas démarré
    private function ErrorIfNotStarted() {
        if (!$this->is_start) {
            throw new DomainException('Veuillez démarrer le véhicule');
        }   
    }
    //faire avancer le véhicule (augmenter les rapports)
    public function accelerate() {
        //tester si on a démarré
        $this->ErrorIfNotStarted();
        
        //controler si on a pas atteint la vitesse maximale
        if ($this->_gear == $this->_nbSpeed) {
            throw new DomainException('Vitesse maximale atteinte !');
        }
        
        //traitement
        $this->_gear++;
        
        if ($this->_gear == 0) {
          echo "nous sommes au point mort <br />";  
        }
        else {
          echo "nous avons passer la vitesse n° $this->_gear <br />";  
        }
        
        
        
    }
    //faire freiner le véhicule (diminuer les rapports)
    public function slow() {
        //que la voiture a bien démarré
        //tester si on a démarré
        $this->ErrorIfNotStarted();
        
        //qu'on est pas sur le point mort
        if ($this->_gear < 1) {
            throw new DomainException('On ne peut réduire la vitesse !');
        }
        
        //traitement
        $this->_gear--;
        
        if ($this->_gear == 0) {
            echo "Nous avons atteint le point mort <br />";
        }
        else {
            echo "nous avons rétrogradé à la vitesse n° $this->_gear <br />";
        }
        
    }
    //faire reculer
    public function stepBack() {
       //tester si on a démarré
        $this->ErrorIfNotStarted(); 
        
        //il faut être au point mort
        if($this->_gear != 0) {
            throw new DomainException('Passer au point mort !');
        }
        
        $this->_gear = -1;
        
        echo "Le véhicule recule<br />";
    }
    
    //couper le contact
    public function stop() {
        //le moteur est déjà allumé et on est sur le point mort
         //tester si on a démarré
        $this->ErrorIfNotStarted(); 
        
        if (!$this->_gear == 0) {
            throw new DomainException('Passer au point mort  avant de couper le contact !');
        }
        
        $this->is_start = false;
        
        echo "Le Véhicule est arrêté.<br />";
        
    }
}