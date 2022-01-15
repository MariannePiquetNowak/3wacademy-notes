<?php

class Animate {
    //propriétés
    private $attributeName="opacity";
    private $dur="1s";
    private $values="0;1;0";
    private $repeatCount="indefinite";
    private $begin="0.1";
    
    public function getParams():array {
        return [
            "attributeName"  => $this->attributeName,
            "dur" => $this->dur,
            "values" => $this->values,
            "repeatCount" => $this->repeatCount,
            "begin" => $this->begin
            ];
    }
}