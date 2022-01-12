<?php

class Svg {
    private int $_width;
    private int $_height;
    // La propriété list est au départ un tableau vide
    private array $_list = [];

    public function __construct(int $width, int $height)
    {
        // On itialise les props
        $this->_width   = $width;
        $this->_height  = $height;
        // Pas la peine d'initialiser $list car on l'a déjà fait plus haut
    
    }

      //getter
      public function __get(string $prop) {
        switch($prop) {
            case "width":
                return $this->_width;
                
                break;
                
            case "height":
                return $this->_height;
                
                break;
            
            default:
                throw new DomainException('Propriété introuvable');
      
        }       
    }

    // Methodes 
    public function render()
    {
        // Retourne les SVG contenues dans list[]
        // Va parcourir list 
        
    }

    public function add(...$shape)
    {
        // add va ajouter des objets a un tableau, elle aura comme param juste un objet
        // $shape = new Rectangle(40, 40, "yellow", "black", 0, 1, 50, 50);
        $listShapes = $this->_list;
        array_push($listShapes, $shape);
        
        return $listShapes;
        // Il faut trouver un moyen de sauvegarder les formes ajouter (+=)
    }

}