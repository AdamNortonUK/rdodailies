<?php 

$WeeklyCollectionDate = $data['weeklyDate'];
$WeeklyCollectionSet = $data['weekly'];

$WeeklySet = strtolower($data['weekly']);
$WeeklySetImage = strtolower($data['weekly']);

$WeeklySetImage = substr($WeeklySet, strrpos($WeeklySet, 'set') + 0);
$WeeklySetTitle = substr($WeeklySet, strrpos($WeeklySet, 'set_') + 4);	
$WeeklySetTitle = str_replace('_', ' ', $WeeklySetTitle); 
?>

<div class="challenges-container-wrapper">	
<?php $ChallengeType = "weekly"; ?> 
	
	<div class="challenges-title-container">
		<img class="challenges-title-container-icon" src="/assets/images/daily-challenges/weekly-collections-160.png" alt="<? echo ucfirst($ChallengeType); ?> Challenges" />
		<span class="challenges-title">Madam Nazar's Weekly Set <? echo $WeeklyCollectionDate; ?></span>
		
		<div class="daily-challenges-toggle-wrapper" id="<? echo $ChallengeType; ?>-location-toggle">
			<input class="daily-challenges-toggle" type="checkbox" name="show-weekly-collection" value="1" id="show-weekly-collection" />
			<label class="daily-challenges-toggle-label" for="show-weekly-collection"></label>
		</div>
	</div>
	
	<div class="challenges-container" id="weekly-collection-container">
		<div style="margin:10px 0px 0px 10px">
			<img src="https://rdocdn.xyz/nazar/collections/560/<? echo $WeeklySetImage; ?>.png" alt="Weekly Collection [<? echo ucwords($WeeklySetTitle); ?>]"/>
	</div>
	
	</div>

</div>

<hr class="challenges-container-divider">