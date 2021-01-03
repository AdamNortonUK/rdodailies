
<div class="challenges-container-wrapper">	
<?php $ChallengeType = "bounty"; ?> 
	
	<div class="challenges-title-container">
		<img class="challenges-title-container-icon" src="/assets/images/daily-challenges/challenges-<? echo $ChallengeType; ?>-160.png" alt="<? echo ucfirst($ChallengeType); ?> Challenges" />
		<span class="challenges-title"><? echo ucfirst($ChallengeType); ?> Hunter Challenges</span>
		
		<div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-challenges-toggle">
			<input class="daily-challenges-toggle" type="checkbox" name="show-<? echo $ChallengeType; ?>-challenges" value="1" id="show-<? echo $ChallengeType; ?>-challenges" />
			<label class="daily-challenges-toggle-label" for="show-<? echo $ChallengeType; ?>-challenges"></label>
		</div>
	</div>
	
	<div class="challenges-container" id="bounty-challenges-container">
<?php $BountyChallenges = [1 => 
$BountyChallenge01,$BountyChallenge02,$BountyChallenge03];
sort($BountyChallenges, SORT_NATURAL | SORT_FLAG_CASE);
foreach ($BountyChallenges as $BountyChallenge) {
//var_dump($BountyChallenges); 
?>
<?php
  if (strpos($BountyChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $BountyChallenge, $BountyChallengeImage);
    $BountyChallengeImage = $BountyChallengeImage[1][0]; } else { $BountyChallengeImage = "1"; } 
  
  if (strpos($BountyChallenge, '{') !== false) {
    preg_match_all("/\\{(.*?)\\}/", $BountyChallenge, $BountyChallengeNumber);
    $BountyChallengeNumber = $BountyChallengeNumber[1][0]; } else { $BountyChallengeNumber = "0"; }   
  
  if (strpos($BountyChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $BountyChallenge, $BountyChallengeGoal);
    $BountyChallengeGoal = $BountyChallengeGoal[1][0]; } else { $BountyChallengeGoal = "1"; }
?>   
		<div class="challenge-input-container">
			<span class="challenge-goal">    
				<label for="BountyChallenge<?php echo $BountyChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><?php echo $BountyChallengeGoal; ?></label>
			</span>
			
			<label class="challenge-input-container-label" for="BountyChallenge<?php echo $BountyChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><? echo strtok($BountyChallenge, '[{'); ?></label>
			
			<span class="challenge-input-complete">
				<input class="challenge-input-checkbox" type="checkbox" name="BountyChallenge" id="BountyChallenge<?php echo $BountyChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>" />
				<label class="challenge-input-checkbox-label" for="BountyChallenge<?php echo $BountyChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"></label>    
			</span>    
		</div>
<?php } ?>
		
    <hr class="challenges-container-divider">
	
	</div>

</div>
