
<div class="challenges-container-wrapper">	
<?php $ChallengeType = "collector"; ?> 
	
	<div class="challenges-title-container">
		<img class="challenges-title-container-icon" src="/assets/images/daily-challenges/challenges-<? echo $ChallengeType; ?>-160.png" alt="<? echo ucfirst($ChallengeType); ?> Challenges" />
		<span class="challenges-title"><? echo ucfirst($ChallengeType); ?> Challenges</span>
		
		<div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-challenges-toggle">
			<input class="daily-challenges-toggle" type="checkbox" name="show-<? echo $ChallengeType; ?>-challenges" value="1" id="show-<? echo $ChallengeType; ?>-challenges" />
			<label class="daily-challenges-toggle-label" for="show-<? echo $ChallengeType; ?>-challenges"></label>
		</div>
	</div>
	
	<div class="challenges-container" id="collector-challenges-container">
<?php $CollectorChallenges = [1 => 
$CollectorChallenge01,$CollectorChallenge02,$CollectorChallenge03];
sort($CollectorChallenges, SORT_NATURAL | SORT_FLAG_CASE);
foreach ($CollectorChallenges as $CollectorChallenge) {
//var_dump($CollectorChallenges); 
?>
<?php
  if (strpos($CollectorChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $CollectorChallenge, $CollectorChallengeImage);
    $CollectorChallengeImage = $CollectorChallengeImage[1][0]; } else { $CollectorChallengeImage = "1"; } 
  
  if (strpos($CollectorChallenge, '{') !== false) {
    preg_match_all("/\\{(.*?)\\}/", $CollectorChallenge, $CollectorChallengeNumber);
    $CollectorChallengeNumber = $CollectorChallengeNumber[1][0]; } else { $CollectorChallengeNumber = "0"; }   
  
  if (strpos($CollectorChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $CollectorChallenge, $CollectorChallengeGoal);
    $CollectorChallengeGoal = $CollectorChallengeGoal[1][0]; } else { $CollectorChallengeGoal = "1"; }
?>   
		<div class="challenge-input-container">
			<span class="challenge-goal">    
				<label for="CollectorChallenge<?php echo $CollectorChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><?php echo $CollectorChallengeGoal; ?></label>
			</span>
			
			<label class="challenge-input-container-label" for="CollectorChallenge<?php echo $CollectorChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><? echo strtok($CollectorChallenge, '[{'); ?></label>
			
			<span class="challenge-input-complete">
				<input class="challenge-input-checkbox" type="checkbox" name="CollectorChallenge" id="CollectorChallenge<?php echo $CollectorChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>" />
				<label class="challenge-input-checkbox-label" for="CollectorChallenge<?php echo $CollectorChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"></label>    
			</span>    
		</div>
<?php } ?>		
		
		<div class="reset-timers-container">
			<label class="reset-timers-label" for="DailiesResetTimer">
				<span>Collector cycles reset in</span>
			</label>
			
			<span class="reset-timers">
				<span class="cycles-timer-hour" id="cycles-timer-hour"></span>
				<span class="cycles-timer-hours">hours</span>
				<span class="cycles-timer-minute" id="cycles-timer-minute"></span>
				<span class="timer-minutes">minutes</span>
				<span class="cycles-timer-second" id="cycles-timer-second"></span>
				<span class="timer-seconds">seconds</span>
			</span>
		</div>			
		
    <hr class="challenges-container-divider">
	
	</div>

</div>
