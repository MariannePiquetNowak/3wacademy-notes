<?php

class Motor {
    
    //propriétés
    private int $_nbSpeed;
    
    private bool $is_start = false;
    private int $_gear = 0;
    

    //constructeur
    public function __construct(int $nbSpeed) {
        $this->_nbSpeed = $nbSpeed;
    }
    
    //getter
    public function __get(string $prop) {
        switch($prop) {
            case "nbSpeed":
                
                return $this->_nbSpeed;
                
                break;
                
            case "is_start":
             
                return $this->is_start;
                
                break;
                
            case "gear":
             
                return $this->_gear;
                
                break;
            
            default:
            throw new DomainException('Propriété introuvable');
      
        }       
    }
    
    //start_motor
    public function start() {
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