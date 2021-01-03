
<div class="challenges-container-wrapper">	
<?php $ChallengeType = "general"; ?>
	
	<div class="challenges-title-container">
		<img class="challenges-title-container-icon" src="/assets/images/daily-challenges/challenges-<? echo $ChallengeType; ?>-160.png" alt="<? echo ucfirst($ChallengeType); ?> Challenges" />
		<span class="challenges-title"><? echo ucfirst($ChallengeType); ?> Challenges Sort</span>
		
		<div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-challenges-toggle">
			<input class="daily-challenges-toggle" type="checkbox" name="show-<? echo $ChallengeType; ?>-challenges" value="1" id="show-<? echo $ChallengeType; ?>-challenges" />
			<label class="daily-challenges-toggle-label" for="show-<? echo $ChallengeType; ?>-challenges" id="toggle-<?php echo $DailyChallengeDate; ?>"></label>
		</div>  
	</div>
	
	<div class="challenges-container" id="<? echo $ChallengeType; ?>-challenges-container">		
		
<?php 
$GeneralChallenges = [1 => $GeneralChallenge01,$GeneralChallenge02,$GeneralChallenge03,$GeneralChallenge04,$GeneralChallenge05,$GeneralChallenge06,$GeneralChallenge07];
sort($GeneralChallenges, SORT_NATURAL | SORT_FLAG_CASE);
foreach ($GeneralChallenges as $GeneralChallenge) {
//var_dump($DailyChallenges); 
?>
<?php
  if (strpos($GeneralChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $GeneralChallenge, $GeneralChallengeImage);
    $GeneralChallengeImage = $GeneralChallengeImage[1][0]; } else { $GeneralChallengeImage = "1"; } 
  
  if (strpos($GeneralChallenge, '{') !== false) {
    preg_match_all("/\\{(.*?)\\}/", $GeneralChallenge, $GeneralChallengeNumber);
    $GeneralChallengeNumber = $GeneralChallengeNumber[1][0]; } else { $GeneralChallengeNumber = "0"; } 
    
  if (strpos($GeneralChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $GeneralChallenge, $GeneralChallengeGoal);
    $GeneralChallengeGoal = $GeneralChallengeGoal[1][0]; } else { $GeneralChallengeGoal = "1"; }
?>   
		<div class="challenge-input-container">
			<span class="challenge-goal">    
				<label for="GeneralChallenge<?php echo $GeneralChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><?php echo $GeneralChallengeGoal; ?></label>
			</span>
			
			<label class="challenge-input-container-label" id="GeneralChallenge<?php echo $GeneralChallengeNumber; ?>" for="GeneralChallenge<?php echo $GeneralChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><? echo strtok($GeneralChallenge, '[{'); ?></label>
			
			<span class="general-challenge-input-complete">
				<input class="general-challenge-input-checkbox" type="checkbox" name="GeneralChallenge" id="GeneralChallenge<?php echo $GeneralChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>" />
				<label class="general-challenge-input-checkbox-label" for="GeneralChallenge<?php echo $GeneralChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"></label>    
			</span>    
		</div>
<?php } ?>				
		
    <hr class="challenges-container-divider">
	
	</div>

</div>
