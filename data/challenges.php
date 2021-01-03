<?php 

$file = file_get_contents('https://rdocdn.xyz/api/dailies.php');
//$file = file_get_contents('data/challenges.json');
//$file = file_get_contents('api/rdodailies.php');
$date = json_decode($file,true);
//$currentDailyChallengesDate = '2020-10-17';
//$currentDailyChallengesDate = $data['date'];
$currentDailyChallengesDate = $date['date'];
$DailyChallengesPageDate = $date['date'];


$GeneralChallenge = $BountyChallenge = $CollectorChallenge = $MoonshinerChallenge = $TraderChallenge = $NaturalistChallenge = 
  "Challenge not yet known";

$GeneralChallengeX = $BountyChallengeX = $CollectorChallengeX = $MoonshinerChallengeX = $TraderChallengeX = $NaturalistChallengeX = " ";

require_once('challenge-list.php');

$file = file_get_contents('https://rdocdn.xyz/api/dailies.php');
//$file = file_get_contents('data/challenges.json');
//$file = file_get_contents('api/rdodailies.php');
$data = json_decode($file,true);

$GeneralChallengeKeyData01 = $data['general'][0]['daily']; 
$GeneralChallengeKeyData02 = $data['general'][1]['daily']; 
$GeneralChallengeKeyData03 = $data['general'][2]['daily']; 
$GeneralChallengeKeyData04 = $data['general'][3]['daily']; 
$GeneralChallengeKeyData05 = $data['general'][4]['daily']; 
$GeneralChallengeKeyData06 = $data['general'][5]['daily']; 
$GeneralChallengeKeyData07 = $data['general'][6]['daily'];

$BountyChallengeKeyData01 = $data['bounty'][0]['daily'];  
$BountyChallengeKeyData02 = $data['bounty'][1]['daily'];  
$BountyChallengeKeyData03 = $data['bounty'][2]['daily'];

$TraderChallengeKeyData01 = $data['trader'][0]['daily'];  
$TraderChallengeKeyData02 = $data['trader'][1]['daily'];  
$TraderChallengeKeyData03 = $data['trader'][2]['daily'];

$CollectorChallengeKeyData01 = $data['collector'][0]['daily'];  
$CollectorChallengeKeyData02 = $data['collector'][1]['daily'];  
$CollectorChallengeKeyData03 = $data['collector'][2]['daily'];

$MoonshinerChallengeKeyData01 = $data['moonshiner'][0]['daily'];  
$MoonshinerChallengeKeyData02 = $data['moonshiner'][1]['daily'];  
$MoonshinerChallengeKeyData03 = $data['moonshiner'][2]['daily'];

$NaturalistChallengeKeyData01 = $data['naturalist'][0]['daily'];  
$NaturalistChallengeKeyData02 = $data['naturalist'][1]['daily'];  
$NaturalistChallengeKeyData03 = $data['naturalist'][2]['daily'];


$DailyChallengesDate = new DateTime($DailyChallengesPageDate);

$NazarMapLocation = $data['nazar'];

$GeneralChallenge01 = ${$GeneralChallengeKeyData01} . "{01}";
$GeneralChallenge02 = ${$GeneralChallengeKeyData02} . "{02}";
$GeneralChallenge03 = ${$GeneralChallengeKeyData03} . "{03}";
$GeneralChallenge04 = ${$GeneralChallengeKeyData04} . "{04}";
$GeneralChallenge05 = ${$GeneralChallengeKeyData05} . "{05}";
$GeneralChallenge06 = ${$GeneralChallengeKeyData06} . "{06}";
$GeneralChallenge07 = ${$GeneralChallengeKeyData07} . "{07}";

$BountyChallenge01 = ${$BountyChallengeKeyData01} . "{01}";
$BountyChallenge02 = ${$BountyChallengeKeyData02} . "{02}";
$BountyChallenge03 = ${$BountyChallengeKeyData03} . "{03}"; 

$TraderChallenge01 = ${$TraderChallengeKeyData01} . "{01}";
$TraderChallenge02 = ${$TraderChallengeKeyData02} . "{02}";
$TraderChallenge03 = ${$TraderChallengeKeyData03} . "{03}";

$CollectorChallenge01 = ${$CollectorChallengeKeyData01} . "{01}";
$CollectorChallenge02 = ${$CollectorChallengeKeyData02} . "{02}";
$CollectorChallenge03 = ${$CollectorChallengeKeyData03} . "{03}";

$MoonshinerChallenge01 = ${$MoonshinerChallengeKeyData01} . "{01}";
$MoonshinerChallenge02 = ${$MoonshinerChallengeKeyData02} . "{02}";
$MoonshinerChallenge03 = ${$MoonshinerChallengeKeyData03} . "{03}";

$NaturalistChallenge01 = ${$NaturalistChallengeKeyData01} . "{01}";
$NaturalistChallenge02 = ${$NaturalistChallengeKeyData02} . "{02}";
$NaturalistChallenge03 = ${$NaturalistChallengeKeyData03} . "{03}";

$DailyChallengeDate = $DailyChallengesDate->format('Y-m-d');
$DailyChallengesDate = $DailyChallengesDate->format('F d');

?>