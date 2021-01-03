<?php 
//error_reporting(0);
date_default_timezone_set("Europe/London");

$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; 


$date = date('y-m-d');
$dateDay = date('d');
$dateMonth = date('m');
$dateYear = date('Y');

?>
