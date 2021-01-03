<? 
$file = file_get_contents('data/challenges.json');
$data = json_decode($file,true);
$currentDailyChallengesDate = $data['date']; ?>