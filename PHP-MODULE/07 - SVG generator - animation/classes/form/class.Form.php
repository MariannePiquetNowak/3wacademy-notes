<?php

class Form {
    use FormGenerator;
    
    private int $index = 0;
    
    public function __construct(array $def, int $i) {

            $this->setField($def, $i);
            
            $this->index = $i;

    }
    
    
    public function render(string $shape) {
        
        return '
        <input type="hidden" name="shape[]" value="'.$shape.'" />
        <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">'.$shape.' n°'.($this->index + 1).'</label>
                </div>
                <div class="field-body">'.$this->getField().'
                <div class="field">
                     <p class="control">
                     <label class="checkbox">
                        <input type="checkbox" name="shape'.$this->index.'Animation" value="1">
                            Animation
                    </label></p></div></div>'; 
    }
}