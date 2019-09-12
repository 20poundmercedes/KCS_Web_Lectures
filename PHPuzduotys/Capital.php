<?php

$ceu = [
    "Italy" => "Rome",
    "Luxembourg" => "Luxembourg",
    "Belgium" => "Brussels",
    "Denmark" => "Copenhagen",
    "Finland" => "Helsinki",
    "France" => "Paris",
    "Slovakia" => "Bratislava",
    "Slovenia" => "Ljubljana",
    "Germany" => "Berlin",
    "Greece" => "Athens",
    "Ireland" => "Dublin",
    "Netherlands" => "Amsterdam",
    "Portugal" => "Lisbon",
    "Spain" => "Madrid",
    "Sweden" => "Stockholm",
    "United Kingdom" => "London",
    "Cyprus" => "Nicosia",
    "Lithuania" => "Vilnius",
    "Czech Republic" => "Prague",
    "Estonia" => "Tallin",
    "Hungary" => "Budapest",
    "Latvia" => "Riga",
    "Malta" => "Valetta",
    "Austria" => "Vienna",
    "Poland" => "Warsaw",
] ;

//foreach ($ceu as $key=>$value){
 //   echo "$key=>$value <br>";
//}


//sort ($ceu);
//foreach ($ceu as $key=>$value){
 // echo "$key=>$value <br>";
//}

//$result = array ();
//$i=1;
//$x=4;
//foreach ($ceu as $key=>$value){
 //   if ($i++ % $x==0){
  //  $result[] = $key;$value;
   //         echo $key.'  yra sostine  '.$value .'<br>';
    //}
//}


$result = array ();
$i=1;
$char = “A”
foreach ($ceu as $key=>$value){
   if ($char){
  $result[] = $key;$value;
         echo $key.'  yra sostine  '.$value .'<br>';
}
}





