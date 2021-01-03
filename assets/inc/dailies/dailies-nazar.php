
<div class="challenges-container-wrapper">	
<?php $ChallengeType = "nazar"; ?> 
	
	<div class="challenges-title-container">
		<img class="challenges-title-container-icon" src="/assets/images/daily-challenges/challenges-collector-160.png" alt="<? echo ucfirst($ChallengeType); ?> Challenges" />
		<span class="challenges-title">Madam Nazar's Location</span>
		
		<div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-location-toggle">
			<input class="daily-challenges-toggle" type="checkbox" name="show-nazar-location" value="1" id="show-nazar-location" />
			<label class="daily-challenges-toggle-label" for="show-nazar-location"></label>
		</div>
	</div>
	
	<div class="challenges-container" id="nazar-location-container">
		<div style="margin:10px 0px 0px -10px">
			<img src="https://rdocdn.xyz/nazar/locations/<? echo $NazarMapLocation; ?>.png" alt="Madam Nazar Location [<? echo $NazarMapLocation; ?>]"/>
	</div>
	
	</div>

</div>

<hr class="challenges-container-divider">
