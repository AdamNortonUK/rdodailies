
<div class="challenges-container-wrapper">	
<?php $ChallengeType = "trader"; ?> 
	
	<div class="challenges-title-container">
		<img class="challenges-title-container-icon" src="/assets/images/daily-challenges/challenges-<? echo $ChallengeType; ?>-160.png" alt="<? echo ucfirst($ChallengeType); ?> Challenges" />
		<span class="challenges-title"><? echo ucfirst($ChallengeType); ?> Challenges</span>
		
		<div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-challenges-toggle">
			<input class="daily-challenges-toggle" type="checkbox" name="show-<? echo $ChallengeType; ?>-challenges" value="1" id="show-<? echo $ChallengeType; ?>-challenges" />
			<label class="daily-challenges-toggle-label" for="show-<? echo $ChallengeType; ?>-challenges"></label>
		</div>
	</div>
	
	<div class="challenges-container" id="trader-challenges-container">
<?php $TraderChallenges = [1 => 
$TraderChallenge01,$TraderChallenge02,$TraderChallenge03];
sort($TraderChallenges, SORT_NATURAL | SORT_FLAG_CASE);
foreach ($TraderChallenges as $TraderChallenge) {
//var_dump($TraderChallenges); 
?>
<?php
  if (strpos($TraderChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $TraderChallenge, $TraderChallengeImage);
    $TraderChallengeImage = $TraderChallengeImage[1][0]; } else { $TraderChallengeImage = "1"; } 
  
  if (strpos($TraderChallenge, '{') !== false) {
    preg_match_all("/\\{(.*?)\\}/", $TraderChallenge, $TraderChallengeNumber);
    $TraderChallengeNumber = $TraderChallengeNumber[1][0]; } else { $TraderChallengeNumber = "0"; }   
  
  if (strpos($TraderChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $TraderChallenge, $TraderChallengeGoal);
    $TraderChallengeGoal = $TraderChallengeGoal[1][0]; } else { $TraderChallengeGoal = "1"; }
?>   
		<div class="challenge-input-container">
			<span class="challenge-goal">    
				<label for="TraderChallenge<?php echo $TraderChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><?php echo $TraderChallengeGoal; ?></label>
			</span>
			
			<label class="challenge-input-container-label" for="TraderChallenge<?php echo $TraderChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><? echo strtok($TraderChallenge, '[{'); ?></label>
			
			<span class="challenge-input-complete">
				<input class="challenge-input-checkbox" type="checkbox" name="TraderChallenge" id="TraderChallenge<?php echo $TraderChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>" />
				<label class="challenge-input-checkbox-label" for="TraderChallenge<?php echo $TraderChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"></label>    
			</span>    
		</div>
<?php } ?>
		
    <hr class="challenges-container-divider">
	
	</div>

</div>
