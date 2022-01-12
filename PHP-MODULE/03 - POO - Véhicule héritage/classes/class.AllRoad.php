<?php

class AllRoad extends Vehicule {
    private $Motor2;
    
    //constructeur
    public function __construct(string $brand, string $model, string $carType, string $color, int $power, string $motorType, int $nbSpeed, int $nbSpeed2) {

        //appeller le constructeur parent
        parent::__construct($brand, $model, $carType, $color, $power, $motorType, $nbSpeed);
        //créer une seconde instance de Motor
        $this->Motor2 = new Motor($nbSpeed2);
        

    }
    
    //tester le sens des boîtes
    private function testGearDirection(int $direction) {
        /*
        valeur de $direction :
        1 : marche avant
        2 : marche arriere
        
        */
        //récupérer les valeurs de chaque boîte
        $gear1 = $this->Motor->gear;
        
        $gear2 = $this->Motor2->gear;
        
        //mise en place des tests
        switch($direction) {
            case 1:
                 //pas de boite en marche arrière
                 if ($gear1 == -1 OR $gear2 == -1) {
                     throw new DomainException('au moins une des boîtes est en marche arrière !');
                 }
                break;

                
            case 2:
                //pas de boite en marche avant
                if ($gear1 > 0 OR $gear2  >0) {
                     throw new DomainException('au moins une des boîtes est en marche arrière !');
                 }
                break;
        }
        
        //si le sens de l'action n'est pas conforme, on va provoquer une erreur
        /*
        on ne peut passer la marche arrière si une boite est en marche avant
        on ne peut passer la marche avant si une boite est en marche arriere
        */
    }
    
    //actions sur le véhicule
    public function startMotor() {
        $this->Motor->start();
        $this->Motor2->start();
    }
    
    //soit sur la première soit la seconde
    public function accelerateMotor(int $opt = 0) {
        
         //tester le sens des boîtes
        $this->testGearDirection(1);
        
        
        switch($opt) {
            case 1:
                $this->Motor->accelerate();
            break;
            
            case 2:
                $this->Motor2->accelerate();
            break;
            
            default:
                throw new DomainException('Choisir une boîte !');
                
        }
        
       
    }
    
    //reformuler 
    
    public function slowMotor(int $opt = 0) {
        //tester le sens des boîtes
        $this->testGearDirection(1);
        
        switch($opt) {
            case 1:
                $this->Motor->slow();
            break;
            
            case 2:
                $this->Motor2->slow();
            break;
            
            default:
                throw new DomainException('Choisir une boîte !');
                
        }
    }
    
    public function stepBackMotor(int $opt = 0) {
        //tester le sens des boîtes
        $this->testGearDirection(2);
        
        switch($opt) {
            case 1:
                $this->Motor->stepBack();
            break;
            
            case 2:
                $this->Motor2->stepBack();
            break;
            
            default:
                throw new DomainException('Choisir une boîte !');
                
        }
    }
    
    public function stopMotor() {
        $this->Motor->stop();
        $this->Motor2->stop();
    }
}