
<div class="challenges-container-wrapper">	
<?php $ChallengeType = "naturalist"; ?> 
	
	<div class="challenges-title-container">
		<img class="challenges-title-container-icon" src="/assets/images/daily-challenges/challenges-<? echo $ChallengeType; ?>-160.png" alt="<? echo ucfirst($ChallengeType); ?> Challenges" />
		<span class="challenges-title"><? echo ucfirst($ChallengeType); ?> Challenges</span>
		
		<div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-challenges-toggle">
			<input class="daily-challenges-toggle" type="checkbox" name="show-<? echo $ChallengeType; ?>-challenges" value="1" id="show-<? echo $ChallengeType; ?>-challenges" />
			<label class="daily-challenges-toggle-label" for="show-<? echo $ChallengeType; ?>-challenges"></label>
		</div>
	</div>
	
	<div class="challenges-container" id="naturalist-challenges-container">
<?php $NaturalistChallenges = [1 => 
$NaturalistChallenge01,$NaturalistChallenge02,$NaturalistChallenge03];
sort($NaturalistChallenges, SORT_NATURAL | SORT_FLAG_CASE);
foreach ($NaturalistChallenges as $NaturalistChallenge) {
//var_dump($NaturalistChallenges); 
?>
<?php
  if (strpos($NaturalistChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $NaturalistChallenge, $NaturalistChallengeImage);
    $NaturalistChallengeImage = $NaturalistChallengeImage[1][0]; } else { $NaturalistChallengeImage = "1"; } 
  
  if (strpos($NaturalistChallenge, '{') !== false) {
    preg_match_all("/\\{(.*?)\\}/", $NaturalistChallenge, $NaturalistChallengeNumber);
    $NaturalistChallengeNumber = $NaturalistChallengeNumber[1][0]; } else { $NaturalistChallengeNumber = "0"; }   
  
  if (strpos($NaturalistChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $NaturalistChallenge, $NaturalistChallengeGoal);
    $NaturalistChallengeGoal = $NaturalistChallengeGoal[1][0]; } else { $NaturalistChallengeGoal = "1"; }
?>   
		<div class="challenge-input-container">
			<span class="challenge-goal">    
				<label for="NaturalistChallenge<?php echo $NaturalistChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><?php echo $NaturalistChallengeGoal; ?></label>
			</span>
			
			<label class="challenge-input-container-label" for="NaturalistChallenge<?php echo $NaturalistChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><? echo strtok($NaturalistChallenge, '[{'); ?></label>
			
			<span class="challenge-input-complete">
				<input class="challenge-input-checkbox" type="checkbox" name="NaturalistChallenge" id="NaturalistChallenge<?php echo $NaturalistChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>" />
				<label class="challenge-input-checkbox-label" for="NaturalistChallenge<?php echo $NaturalistChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"></label>    
			</span>    
		</div>
<?php } ?>
<!--		
		<div class="reset-timers-container">
			<label class="reset-timers-label" for="NaturalistResetTimer">
				<span>Sighting Missions reset in</span>
			</label>
			
			<span class="reset-timers">
				<span class="naturalist-timer-minute" id="naturalist-timer-minute"></span>
				<span class="timer-minutes">minutes</span>
				<span class="naturalist-timer-second" id="naturalist-timer-second"></span>
				<span class="timer-seconds">seconds</span>
			</span>
		</div>			
-->		
    <hr class="challenges-container-divider">
	
	</div>

</div>
