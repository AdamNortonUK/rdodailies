
<div class="challenges-container-wrapper">
<?php $ChallengeType = "completed"; ?> 

<div class="challenges-title-container">
    <img class="challenges-title-container-icon" src="/assets/images/daily-challenges/challenges-general-160.png" alt="Total Challenges <? echo ucfirst($ChallengeType); ?>" />
  
  <span class="challenges-title">Challenges <? echo ucfirst($ChallengeType); ?></span>
  
  <div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-challenges-toggle">
    
    <input class="daily-challenges-toggle" type="checkbox" name="show-<? echo $ChallengeType; ?>-challenges" value="1" id="show-<? echo $ChallengeType; ?>-challenges" />
    
    <label class="daily-challenges-toggle-label" for="show-<? echo $ChallengeType; ?>-challenges">
    </label>
    
    </div>
  
</div>
		
	<div class="challenges-container" id="<? echo $ChallengeType; ?>-challenges-container">
	
  <div class="challenge-input-container">    
    <span class="challenge-goal" id="general-challenges-total">0</span>
    
    <label class="challenge-input-container-label" for="DailyGeneralChallengeCompleted-<?php echo $DailyChallengeDate; ?>">
      <span class="general-challenges-completed">General Challenges Completed</span>
    </label>
    
    <span class="challenge-input-complete">
      <input class="challenge-input-checkbox-general" type="checkbox" name="DailyGeneralChallengesCompleted" id="DailyGeneralChallengeCompleted-<?php echo $DailyChallengeDate; ?>" />
      
      <label class="challenge-input-checkbox-general-label" for="DailyGeneralChallengeCompleted-<?php echo $DailyChallengeDate; ?>">
      </label>    
    </span>    
  </div>
	
	<div class="challenge-input-container">    
    <span class="challenge-goal" id="roles-challenges-total"></span>
    
    <label class="challenge-input-container-label" for="RoleChallengeCompleted-<?php echo $DailyChallengeDate; ?>">
		<span class="role-challenges-completed">Role Challenges Completed</span>
    </label>
    
    <span class="challenge-input-complete">
      <input class="challenge-input-checkbox-roles" type="checkbox" name="RoleChallengeCompleted" id="RoleChallengeCompleted-<?php echo $DailyChallengeDate; ?>" />
      
      <label class="challenge-input-checkbox-roles-label" for="RoleChallengeCompleted-<?php echo $DailyChallengeDate; ?>">
      </label>    
    </span>    
  </div>
		
		<div class="reset-timers-container">
			<label class="reset-timers-label" for="DailiesResetTimer">
				<span>Daily Challenges reset in</span>
			</label>
			
			<span class="reset-timers">
				<span class="dailies-timer-hour" id="dailies-timer-hour"></span>
				<span class="dailies-timer-hours">hours</span>
				<span class="dailies-timer-minute" id="dailies-timer-minute"></span>
				<span class="timer-minutes">minutes</span>
				<span class="dailies-timer-second" id="dailies-timer-second"></span>
				<span class="timer-seconds">seconds</span>
			</span>
		</div>			
		
    <hr class="challenges-container-divider">
</div>
