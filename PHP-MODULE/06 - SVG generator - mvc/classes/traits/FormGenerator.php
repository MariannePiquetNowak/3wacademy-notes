<?php

Trait FormGenerator {
        //propriétés
        private $shapeHTML = ''; //contiendra le markup du formulaire de la forme
        
        
        private function setField(array $def, int $i) {
            
            $html = '';
            foreach($def as $nameField => $typeField) {
                
                switch($typeField) {
                    case 'number' :
                        $html .= '
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape'.$i.$nameField.'" type="number" placeholder="'.$nameField.'">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>';
                    
                    break;
                    
                    case 'color':
                        
                        $html .='
                        <div class="field">
                     <p class="control">
                        <input class="input" name="shape'.$i.$nameField.'" type="color" placeholder="'.$nameField.'">
                      </p>
                    </div>';
                        
                        break;
                        
                    case 'float':
                        
                        $html .='
                        <div class="field">
                     <p class="control">
                        <input class="input" name="shape'.$i.$nameField.'" type="number" placeholder="'.$nameField.'">
                      </p>
                    </div>';
                        break;
                }
                
            }
            
            $this->shapeHTML = $html;
        }
        
        private function getField() {
            return $this->shapeHTML;
        }
}