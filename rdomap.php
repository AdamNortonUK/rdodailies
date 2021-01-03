<?php require_once './assets/inc/header.php' ?>
<?php require_once './assets/version.php' ?>
<?php if($_GET){ $DailyChallengesPageDate = $_GET['date']; ?>
<?php require_once './data/challenges-history.php' ?>
<?php } if(!$_GET){ ?>
<?php require_once './data/challenges.php' ?>
<? } ?>
<?php
$titleDate = DateTime::createFromFormat('Y-m-d',$DailyChallengesPageDate);
$newday = date("Y-m-d");
$yesterday = DateTime::createFromFormat('Y-m-d',$DailyChallengesPageDate);
$yesterday->modify('-1 day');
$tomorrow = DateTime::createFromFormat('Y-m-d',$DailyChallengesPageDate);
$tomorrow->modify('+1 day');
$NazarDate = DateTime::createFromFormat('Y-m-d',$DailyChallengesPageDate);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Daily Challenges - <?php echo $titleDate->format("F d"); ?></title>
<?php require_once 'assets/inc/meta-dailies.php' ?>
</head>	
<body>
<div class="challenges-wrapper-map">
<!--Daily Challenges Wrapper-->	
	<a style="text-decoration:none; color:#fff;" href="/">
	<h2 id="challenges-header">
		<img id="challenges-header-left" src="./assets/images/header_bg_left.png" alt="">
		<div id="challenges-header-center">
			<span data-text="menu.daily_challenges">Daily Challenges</span>
		</div>
		<img id="challenges-header-right" src="./assets/images/header_bg_right.png" alt="">
	</h2>
	</a>
	
	<div class="widgets">

        <span class="daily-challenge-widgets-date-selection">
          <? if ("2020-10-14" == "$DailyChallengesPageDate") { ?><span class="daily-challenges-date-selection-left">&nbsp;</span>
          <? } else { ?><span class="daily-challenges-date-selection-left"><a href="?date=<?php echo $yesterday->format('Y-m-d'); ?>"><img class="date-selection-arrow" src="assets/images/selection_left.png" alt="arrow"></a></span><? } ?>
		  
             <span class="daily-challenges-date-selection"><?php echo $DailyChallengesDate; ?></span>
          
          <? if ($currentDailyChallengesDate == "$DailyChallengesPageDate") { ?>
          <span class="daily-challenges-date-selection-right">&nbsp;</span>
          <? } else { ?><span class="daily-challenges-date-selection-right"><a href="?date=<?php echo $tomorrow->format('Y-m-d'); ?>"><img class="date-selection-arrow" src="assets/images/selection_right.png" alt="arrow"></a></span><? } ?>
         </span>
        
        <span class="clock-rdonline" id="clock-rdonline"></span>
             
        
 
        <span class="daily-challenges-gold-counter">
          <img class="daily-challenges-gold-icon" src="/assets/images/daily-challenge-icons/challenge_gold.png">
        </span>
        
        <span class="daily-challenges-gold" id="daily-challenges-gold"></span>
        
         
        <span class="daily-challenges-counter">
          <img class="daily-challenges-counter-icon" src="/assets/images/daily-challenge-icons/daily_challenge_toast_0.png" id="daily-challenges-counter-icon">
        </span>
      
	</div>
	
<hr class="challenges-divider">	
<div style="padding-bottom:8px;"></div>
<?php require_once './assets/inc/dailies.php' ?>		
	
<?php //require_once './assets/inc/dailies/dailies-nazar.php' ?>
	
<?php require_once './assets/inc/dailies/dailies-weekly.php' ?>	
	
<?php require_once './assets/inc/gold-multiplier.php' ?>     
	
<div style="padding-bottom:6px;"></div>

<?php require_once './assets/inc/donate-form.php' ?>      

<div style="padding-bottom:6px;"></div>
	
<a href="https://discord.gg/YDQyjTz7Gq"><img style="margin:10px 0px 0px 10px" src="/assets/images/discord-560.png" /></a>	
	
<div style="padding-bottom:6px;"></div>
	
<?php //require_once './assets/inc/discord-widget.php' ?>   	

	
<!--Daily Challenges Wrapper Close-->
</div>
<?php require_once 'assets/inc/footer-dailies.php' ?>
	</body>

</html>