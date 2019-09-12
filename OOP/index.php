<?php
include 'Car.php';
$automobilis = new Car();
$automobilis ->spalva = 'raudona';
$automobilis ->greitis = '50km/h';
echo $automobilis->gautiSpalva()."<br>";//raudona
$automobilis->vaziuoti();//Automobilis vaziuoja 50km/h greiciu
$automobilis->vaziuoti();
$automobilis->vaziuoti();
echo "<br>Rida: ". $automobilis->gautiRida();


