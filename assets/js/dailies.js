$(document).ready(function() {
  
    $(document).ready(function() {
    // On refresh check if there are values selected
    if (localStorage.selectVal) {
            // Select the value stored
        $('select').val( localStorage.selectVal );
    }
});
  
var checkboxValue = JSON.parse(localStorage.getItem('checkboxValue')) || {}
    var $checkbox = $(".challenge-input-container :checkbox");

    $checkbox.on("change", function() {
      $checkbox.each(function() {
        checkboxValue[this.id] = this.checked;
      });
      localStorage.setItem("checkboxValue", JSON.stringify(checkboxValue));
    });

    //on page load
    $.each(checkboxValue, function(key, value) {
      $("#" + key).prop('checked', value);
    });
	
	var checkboxValueGeneral = JSON.parse(localStorage.getItem('checkboxValueGeneral')) || {}
    var $checkboxGeneral = $(".general-challenge-input-container :checkbox");

    $checkboxGeneral.on("change", function() {
      $checkboxGeneral.each(function() {
        checkboxValueGeneral[this.id] = this.checked;
      });
      localStorage.setItem("checkboxValueGeneral", JSON.stringify(checkboxValueGeneral));
    });

    //on page load
    $.each(checkboxValueGeneral, function(key, value) {
      $("#" + key).prop('checked', value);
    });
  
$('.general-challenge-input-checkbox').on('click', function(){
    var GeneralChecked = 0;
    $.each($('.general-challenge-input-checkbox'), function(){
        if($(this).is(':checked')){
            GeneralChecked++;    
        }
    });
    if(GeneralChecked >= 7){
        $.each($('.challenge-input-checkbox-general'), function(){
            if($(this).not(':checked').length == 1){
                $(this).prop('checked','checked');    
            }
        });
    }else{
        $('.challenge-input-checkbox-general').removeProp('checked');    
    }
});
  
$('.challenge-input-checkbox').on('click', function(){
    var RolesChecked = 0;
    $.each($('.challenge-input-checkbox'), function(){
        if($(this).is(':checked')){
            RolesChecked++;    
        }
    });
    if(RolesChecked >= 9){
        $.each($('.challenge-input-checkbox-roles'), function(){
            if($(this).not(':checked').length == 1){
                $(this).prop('checked','checked');    
            }
        });
    }else{
        $('.challenge-input-checkbox-roles').removeProp('checked');    
    }
});
    
  function DailyChallengesCounter() {
    
    var DailyChallengesIcons = '/assets/images/daily-challenge-icons/';
    var DailyChallengesCompleted = $("input[class='challenge-input-checkbox']:not(':checked')").length;
    var DailyChallengesCompleted2 = $("input[class='general-challenge-input-checkbox']:not(':checked')").length;
    var GeneralChallengesCompleted = $("input[name='GeneralChallenge']:not(':checked')").length;
    var BountyChallengesCompleted = $("input[name='BountyChallenge']:not(':checked')").length;
    var TraderChallengesCompleted = $("input[name='TraderChallenge']:not(':checked')").length;  
    var CollectorChallengesCompleted = $("input[name='CollectorChallenge']:not(':checked')").length;
    var MoonshinerChallengesCompleted = $("input[name='MoonshinerChallenge']:not(':checked')").length;
    var NaturalistChallengesCompleted = $("input[name='NaturalistChallenge']:not(':checked')").length;
    
    var GeneralDailyChallengesCompleted = $("input[name='GeneralChallenge']:checked").length;
    
    var BountyRoleChallengesCompleted = $("input[name='BountyChallenge']:checked").length;
    var TraderRoleChallengesCompleted = $("input[name='TraderChallenge']:checked").length;    
    var CollectorRoleChallengesCompleted = $("input[name='CollectorChallenge']:checked").length;    
    var MoonshinerRoleChallengesCompleted = $("input[name='MoonshinerChallenge']:checked").length;
    var NaturalistRoleChallengesCompleted = $("input[name='NaturalistChallenge']:checked").length;
    
    var RoleDailyChallengesCompleted = BountyRoleChallengesCompleted + TraderRoleChallengesCompleted + CollectorRoleChallengesCompleted + MoonshinerRoleChallengesCompleted + NaturalistRoleChallengesCompleted;
    
    $("#general-challenges-total").text(GeneralDailyChallengesCompleted);    
    $("#roles-challenges-total").text(RoleDailyChallengesCompleted);	  

	var TotalChallengesCompleted = DailyChallengesCompleted + DailyChallengesCompleted2;      

	$("#daily-challenges-counter-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + TotalChallengesCompleted + '.png');
    $("#daily-challenges-counter-widget-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + DailyChallengesCompleted + '.png');
    $("#daily-challenges-counter-title-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + DailyChallengesCompleted + '.png');    
    $("#general-challenges-counter-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + GeneralChallengesCompleted + '.png');
      
    $("#bounty-challenges-counter-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + BountyChallengesCompleted + '.png');
    $("#trader-challenges-counter-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + TraderChallengesCompleted + '.png');
    $("#collector-challenges-counter-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + CollectorChallengesCompleted + '.png');     
    $("#moonshiner-challenges-counter-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + MoonshinerChallengesCompleted + '.png');
    $("#naturalist-challenges-counter-icon").prop('src', DailyChallengesIcons + 'daily_challenge_toast_' + NaturalistChallengesCompleted + '.png'); 
      
    $("#general-challenges-toggle").prop('class','daily-challenges-toggle' + GeneralChallengesCompleted + '-wrapper');    
    $("#bounty-challenges-toggle").prop('class','daily-challenges-toggle' + BountyChallengesCompleted + '-wrapper');
    $("#trader-challenges-toggle").prop('class','daily-challenges-toggle' + TraderChallengesCompleted + '-wrapper');
    $("#collector-challenges-toggle").prop('class','daily-challenges-toggle' + CollectorChallengesCompleted + '-wrapper');
    $("#moonshiner-challenges-toggle").prop('class','daily-challenges-toggle' + MoonshinerChallengesCompleted + '-wrapper');
    $("#naturalist-challenges-toggle").prop('class','daily-challenges-toggle' + NaturalistChallengesCompleted + '-wrapper');
      
  }
  
DailyChallengesCounter();
  $(":checkbox").change(DailyChallengesCounter);
  
  
  function DailyChallengesGoldCounter() {
    
    
    var GeneralChallengesGoldCount = $("input[class='general-challenge-input-checkbox']:checked").length;    
    var RolesChallengesGoldCount = $("input[class='challenge-input-checkbox']:checked").length;    
    var DailyChallengesGoldCount = (GeneralChallengesGoldCount + RolesChallengesGoldCount);      
    var RoleChallengesCompletedGoldCount = $("input[class='challenge-input-checkbox-roles']:checked").length;
    var GeneralChallengesCompletedGoldCount = $("input[class='challenge-input-checkbox-general']:checked").length;
    var DailyChallengesGoldMultiplerValue = document.getElementById("DailyChallengesGoldMultipler");
    var DailyChallengesGoldValue = DailyChallengesGoldMultiplerValue.options[DailyChallengesGoldMultiplerValue.selectedIndex].value;
    var DailyRoleChallengesGold = (DailyChallengesGoldValue * RoleChallengesCompletedGoldCount * 3);
    var DailyGeneralChallengesGold = (DailyChallengesGoldValue * GeneralChallengesCompletedGoldCount * 3);
    
    
    //var DailyChallengesGold = DailyChallengesGoldValue * 10 * DailyChallengesGoldCount / 10;
   
    var DailyChallengesGoldTotal = (DailyGeneralChallengesGold + DailyRoleChallengesGold);
    
    var DailyChallengesGold = ((DailyChallengesGoldTotal + DailyChallengesGoldValue * 10 * DailyChallengesGoldCount / 10).toFixed(2));	  

	$("#daily-challenges-gold").text('' + DailyChallengesGold + ' ');
  
  }

DailyChallengesGoldCounter();
  $(":checkbox").change(DailyChallengesGoldCounter);	

});

document.addEventListener('DOMContentLoaded', function () {
   var input = document.getElementById('DailyChallengesGoldMultipler');
   if (localStorage['DailyChallengesGoldMultipler']) { // if job is set
       input.value = localStorage['DailyChallengesGoldMultipler']; // set the value
   }
   input.onchange = function () {
        localStorage['DailyChallengesGoldMultipler'] = this.value; // change localStorage on change
    }
});
