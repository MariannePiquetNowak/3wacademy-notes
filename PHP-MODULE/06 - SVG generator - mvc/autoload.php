<?php


//appel dynamique des require des class utilisés dans le programme
spl_autoload_register(function($className) {

 
 
 if (strpos($className, "\Shape")){
     
   require_once("classes/Shape/".strstr($className,"\Shape",true)."/class.Shape.php");  
 }
 else {
    require_once("classes/class.".$className.".php"); 
 }
 
 

});