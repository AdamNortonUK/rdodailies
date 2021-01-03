
<div class="challenges-container-wrapper">	
<?php $ChallengeType = "moonshiner"; ?> 
	
	<div class="challenges-title-container">
		<img class="challenges-title-container-icon" src="/assets/images/daily-challenges/challenges-<? echo $ChallengeType; ?>-160.png" alt="<? echo ucfirst($ChallengeType); ?> Challenges" />
		<span class="challenges-title"><? echo ucfirst($ChallengeType); ?> Challenges</span>
		
		<div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-challenges-toggle">
			<input class="daily-challenges-toggle" type="checkbox" name="show-<? echo $ChallengeType; ?>-challenges" value="1" id="show-<? echo $ChallengeType; ?>-challenges" />
			<label class="daily-challenges-toggle-label" for="show-<? echo $ChallengeType; ?>-challenges"></label>
		</div>
	</div>
	
	<div class="challenges-container" id="moonshiner-challenges-container">
<?php $MoonshinerChallenges = [1 => 
$MoonshinerChallenge01,$MoonshinerChallenge02,$MoonshinerChallenge03];
sort($MoonshinerChallenges, SORT_NATURAL | SORT_FLAG_CASE);
foreach ($MoonshinerChallenges as $MoonshinerChallenge) {
//var_dump($MoonshinerChallenges); 
?>
<?php
  if (strpos($MoonshinerChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $MoonshinerChallenge, $MoonshinerChallengeImage);
    $MoonshinerChallengeImage = $MoonshinerChallengeImage[1][0]; } else { $MoonshinerChallengeImage = "1"; } 
  
  if (strpos($MoonshinerChallenge, '{') !== false) {
    preg_match_all("/\\{(.*?)\\}/", $MoonshinerChallenge, $MoonshinerChallengeNumber);
    $MoonshinerChallengeNumber = $MoonshinerChallengeNumber[1][0]; } else { $MoonshinerChallengeNumber = "0"; }   
  
  if (strpos($MoonshinerChallenge, '[') !== false) {
    preg_match_all("/\\[(.*?)\\]/", $MoonshinerChallenge, $MoonshinerChallengeGoal);
    $MoonshinerChallengeGoal = $MoonshinerChallengeGoal[1][0]; } else { $MoonshinerChallengeGoal = "1"; }
?>   
		<div class="challenge-input-container">
			<span class="challenge-goal">    
				<label for="MoonshinerChallenge<?php echo $MoonshinerChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><?php echo $MoonshinerChallengeGoal; ?></label>
			</span>
			
			<label class="challenge-input-container-label" for="MoonshinerChallenge<?php echo $MoonshinerChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"><? echo strtok($MoonshinerChallenge, '[{'); ?></label>
			
			<span class="challenge-input-complete">
				<input class="challenge-input-checkbox" type="checkbox" name="MoonshinerChallenge" id="MoonshinerChallenge<?php echo $MoonshinerChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>" />
				<label class="challenge-input-checkbox-label" for="MoonshinerChallenge<?php echo $MoonshinerChallengeNumber; ?>-<?php echo $DailyChallengeDate; ?>"></label>    
			</span>    
		</div>
<?php } ?>		
		
		<div class="reset-timers-container">
			<label class="reset-timers-label" for="MoonshinerResetTimer">
				<span>Moonshiner buyers reset in</span>
			</label>
			
			<span class="reset-timers">
				<span class="moonshiner-timer-hour" id="moonshiner-timer-hour"></span>
				<span class="timer-hours">hour</span>
				<span class="moonshiner-timer-minute" id="moonshiner-timer-minute"></span>
				<span class="timer-minutes">minutes</span>
				<span class="moonshiner-timer-second" id="moonshiner-timer-second"></span>
				<span class="timer-seconds">seconds</span>
			</span>
		</div>			
		
    <hr class="challenges-container-divider">
	
	</div>

</div>
