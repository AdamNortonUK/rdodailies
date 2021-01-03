 jQuery.fn.translate = function () {
  return Language.translateDom(this);
};

var Language = {
  data: {},
  availableLanguages: ['en'],

  init: function () {
    'use strict';
    let langs = ['en'];

    if (Settings.language !== 'en') {
      langs.push(Settings.language);
    }
  },
};
/*
- DOM will be ready, all scripts will be loaded (all loaded via DOM script elements)
- everything in this file here will be executed
- they can depend on their order here
- unfortunately some async dependencies are not properly taken care of (yet)
*/
$(function () {
  try {
    init();
  } catch (e) {
    if (getParameterByName('show-alert') == '1') {
      alert(e);
    }
    console.error(e);
  }
});

function init() {
  const navLang = navigator.language;
  SettingProxy.addSetting(Settings, 'language', {
    default: Language.availableLanguages.includes(navLang) ? navLang : 'en',
  });
	
  $("#show-general-challenges").prop('checked', Settings.showGeneralChallenges);
  $("#show-bounty-challenges").prop('checked', Settings.showBountyChallenges);
  $("#show-bounty-hunter-challenges").prop('checked', Settings.showBountyHunterChallenges);
  $("#show-collector-challenges").prop('checked', Settings.showCollectorChallenges);
  $("#show-moonshiner-challenges").prop('checked', Settings.showMoonshinerChallenges);
  $("#show-trader-challenges").prop('checked', Settings.showTraderChallenges);
  $("#show-naturalist-challenges").prop('checked', Settings.showNaturalistChallenges);
  $("#show-completed-challenges").prop('checked', Settings.showCompletedChallenges);
  $("#show-timers").prop('checked', Settings.showTimers);
  $("#show-nazar-location").prop('checked', Settings.showNazarLocation);
  $("#show-weekly-collection").prop('checked', Settings.showWeeklyCollection);
	
  $("#general-challenges-container").toggleClass('opened', Settings.showGeneralChallenges);	
  $("#bounty-challenges-container").toggleClass('opened', Settings.showBountyChallenges);
  $("#bounty-hunter-challenges-container").toggleClass('opened', Settings.showBountyHunterChallenges);
  $("#collector-challenges-container").toggleClass('opened', Settings.showCollectorChallenges);
  $("#moonshiner-challenges-container").toggleClass('opened', Settings.showMoonshinerChallenges);
  $("#trader-challenges-container").toggleClass('opened', Settings.showTraderChallenges);
  $("#naturalist-challenges-container").toggleClass('opened', Settings.showNaturalistChallenges);
  $("#completed-challenges-container").toggleClass('opened', Settings.showCompletedChallenges);
  $("#timers-container").toggleClass('opened', Settings.showTimers);
  $("#nazar-location-container").toggleClass('opened', Settings.showNazarLocation);
  $("#weekly-collection-container").toggleClass('opened', Settings.showWeeklyCollection);
	
  //updateTopWidget();
}

function isLocalHost() {
  return location.hostname === "localhost" || location.hostname === "127.0.0.1";
}

function clockTick() {
  'use strict';
  const now = new Date();
  const liveTime = new Date(now);
  const gameTime = new Date(now * 30);
  gameTime.setUTCMinutes(gameTime.getUTCMinutes() - 3);
  const realTime = new Date(now.setUTCHours(now.getUTCHours() + 0));
  const gameHour = gameTime.getUTCHours();
  const realHour = realTime.getUTCHours();
  const nightTime = gameHour >= 22 || gameHour < 5;
  const nightRealTime = realHour >= 22 || realHour < 5;
  const clockFormat = {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
	hourCycle:'h23'
  };
  const timeFormat = {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
	hourCycle:'h23'  
  };
  
  $('#clock').text(gameTime.toLocaleString(Settings.language, clockFormat));
  $('#clock-rdonline').text(gameTime.toLocaleString(Settings.language, clockFormat));
  $('#clock-rdonline-beta').text(gameTime.toLocaleString(Settings.language, clockFormat));
  $('#top-clock-rdonline').text(gameTime.toLocaleString(Settings.language, clockFormat));
  $('#clock-large').text(gameTime.toLocaleString(Settings.language, clockFormat));
    
  $('#day-cycle').removeClass('hidden').attr('src', `./assets/images/side-menu/${nightTime ? 'moon-18' : 'sun-18'}.png`);
	
    const cyclesResetTime = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
	const dailiesResetTime = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
	const cyclesDelta = new Date(cyclesResetTime - now);
	const dailiesDelta = new Date(dailiesResetTime - now);
	dailiesDelta.setUTCHours(dailiesDelta.getUTCHours() + 6);
	const deltaFormat = {
		timeZone: 'UTC',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	    hourCycle:'h23'
	};
	
	const deltaFormatHour = {timeZone: 'UTC',hour: '2-digit',hourCycle:'h23'};
	const deltaFormatMinute = {timeZone: 'UTC',minute: '2-digit',hourCycle:'h23'};
	const deltaFormatSecond = {timeZone: 'UTC',second: '2-digit',hourCycle:'h23'};
	
	$('#cycles-reset-timer').text(cyclesDelta.toLocaleString([], deltaFormat));  	
	$('#cycles-timer-hour').text(cyclesDelta.toLocaleString([], deltaFormatHour));	
	$('#cycles-timer-minute').text(cyclesDelta.toLocaleString([], deltaFormatMinute));	
	$('#cycles-timer-second').text(cyclesDelta.toLocaleString([], deltaFormatSecond)); 	
	
	$('#dailies-reset-timer').text(dailiesDelta.toLocaleString([], deltaFormat));	
	$('#dailies-timer-hour').text(dailiesDelta.toLocaleString([], deltaFormatHour));	
	$('#dailies-timer-minute').text(dailiesDelta.toLocaleString([], deltaFormatMinute));	
	$('#dailies-timer-second').text(dailiesDelta.toLocaleString([], deltaFormatSecond));  	

}

/*
- clockTick() relies on DOM and jquery
- guaranteed only by this scriptâ€™s position at end of index.html
*/
setInterval(clockTick, 1000);

setInterval(() => {
	const now = new Date();
	
	const resetTimerFormat = {
		timeZone: 'UTC',
		hour: '2-digit',
		minute: '2-digit'
	};
	
	const moonshineBuyersReset = (() => {
		const todayDayMs = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).valueOf();
        const timeFromReset = (now.valueOf() - todayDayMs) / 60000;
        const timeToReset = Math.ceil(96 - (timeFromReset % 96));
		const timeToMoonshinerReset = new Date(now.setUTCMinutes(now.getUTCMinutes() + timeToReset));
		const timeToNaturalistReset = new Date(now.setUTCMinutes(now.getUTCMinutes() + timeToReset));
        //document.querySelector('#moonshiner-reset-timer').innerHTML = timeToReset + " minutes";
		
		const timeNow = new Date();
		
		const moonshinerResetTime = Date.UTC(timeToMoonshinerReset.getUTCFullYear(), timeToMoonshinerReset.getUTCMonth(), timeToMoonshinerReset.getUTCDate(), timeToMoonshinerReset.getUTCHours(), timeToMoonshinerReset.getUTCMinutes() + 0);
		
		const moonshinerDelta = new Date(moonshinerResetTime - timeNow);
	
		moonshinerDelta.setUTCSeconds(moonshinerDelta.getUTCSeconds() + 5);
		
		const moonshinerDeltaFormat = {timeZone: 'UTC',hour: '2-digit',minute: '2-digit',second: '2-digit',hourCycle:'h23'};
		const moonshinerDeltaHour = {timeZone: 'UTC',hour: '2-digit',hourCycle:'h23'};
		const moonshinerDeltaMinute = {timeZone: 'UTC',minute: '2-digit',hourCycle:'h23'};
		const moonshinerDeltaSecond = {timeZone: 'UTC',second: '2-digit',hourCycle:'h23'};
		
		const timeNow2 = new Date();
		timeNow2.setUTCHours(timeNow2.getUTCHours() - 1);
		
		const naturalistResetTime = Date.UTC(timeToNaturalistReset.getUTCFullYear(), timeToNaturalistReset.getUTCMonth(), timeToNaturalistReset.getUTCDate(), timeToNaturalistReset.getUTCHours(), timeToNaturalistReset.getUTCMinutes() + 0);
		
		const naturalistDelta = new Date(naturalistResetTime - timeNow);
		const naturalistTime = new Date(naturalistResetTime - timeNow2);
		
		const moonshinerDelta2 = new Date(moonshinerResetTime - timeNow);
		//moonshinerDelta2.setUTCSeconds(moonshinerDelta2.getUTCSeconds() + 1464);
		moonshinerDelta2.setUTCMinutes(moonshinerDelta2.getUTCMinutes() + 13.95);
	
		//naturalistDelta.setUTCMinutes(naturalistDelta.getUTCMinutes() - 48);
		//naturalistDelta.setUTCSeconds(naturalistDelta.getUTCSeconds() + 5);
		
		const naturalistDeltaFormat = {timeZone: 'UTC',hour: '2-digit',minute: '2-digit',second: '2-digit',hourCycle:'h23'};
		const naturalistDeltaHour = {timeZone: 'UTC',hour: '2-digit',hourCycle:'h23'};
		const naturalistDeltaMinute = {timeZone: 'UTC',minute: '2-digit',hourCycle:'h23'};
		const naturalistDeltaSecond = {timeZone: 'UTC',second: '2-digit',hourCycle:'h23'};
		
		$('#moonshiner-time').text(timeNow.toLocaleString([], resetTimerFormat)); 
		$('#moonshiner-reset-time').text(timeToMoonshinerReset.toLocaleString([], resetTimerFormat)); 
		//$('#moonshiner-timer').text(moonshinerDelta);
		$('#moonshiner-timer').text(moonshinerDelta.toLocaleString([], moonshinerDeltaFormat)); 
		$('#moonshiner-timer-hour').text(moonshinerDelta.toLocaleString([], moonshinerDeltaHour)); 
		$('#moonshiner-timer-minute').text(moonshinerDelta.toLocaleString([], moonshinerDeltaMinute)); 
		$('#moonshiner-timer-second').text(moonshinerDelta.toLocaleString([], moonshinerDeltaSecond));
		
		$('#naturalist-time').text(timeNow.toLocaleString([], resetTimerFormat)); 
		$('#naturalist-time2').text(timeNow2.toLocaleString([], naturalistDeltaFormat)); 
		$('#naturalist-reset-time').text(timeToNaturalistReset.toLocaleString([], resetTimerFormat)); 
		$('#naturalist-reset-time2').text(naturalistTime.toLocaleString([], resetTimerFormat)); 
		//$('#moonshiner-timer').text(moonshinerDelta2);
		$('#naturalist-timer').text(naturalistDelta.toLocaleString([], naturalistDeltaFormat)); 
		$('#naturalist-timer-hour').text(moonshinerDelta2.toLocaleString([], naturalistDeltaHour)); 
		$('#naturalist-timer-minute').text(moonshinerDelta2.toLocaleString([], naturalistDeltaMinute)); 
		$('#naturalist-timer-second').text(moonshinerDelta2.toLocaleString([], naturalistDeltaSecond));		
	})();
},1000);


$("#show-general-challenges").on("change", function () {
  Settings.showGeneralChallenges = $("#show-general-challenges").prop('checked');
  $("#general-challenges-container").toggleClass('opened', Settings.showGeneralChallenges);
});


$("#show-bounty-hunter-challenges").on("change", function () {
  Settings.showBountyHunterChallenges = $("#show-bounty-hunter-challenges").prop('checked');
  $("#bounty-hunter-challenges-container").toggleClass('opened', Settings.showBountyHunterChallenges);
});

$("#show-bounty-challenges").on("change", function () {
  Settings.showBountyChallenges = $("#show-bounty-challenges").prop('checked');
  $("#bounty-challenges-container").toggleClass('opened', Settings.showBountyChallenges);
});

$("#show-collector-challenges").on("change", function () {
  Settings.showCollectorChallenges = $("#show-collector-challenges").prop('checked');
  $("#collector-challenges-container").toggleClass('opened', Settings.showCollectorChallenges);
});

$("#show-moonshiner-challenges").on("change", function () {
  Settings.showMoonshinerChallenges = $("#show-moonshiner-challenges").prop('checked');
  $("#moonshiner-challenges-container").toggleClass('opened', Settings.showMoonshinerChallenges);
});

$("#show-trader-challenges").on("change", function () {
  Settings.showTraderChallenges = $("#show-trader-challenges").prop('checked');
  $("#trader-challenges-container").toggleClass('opened', Settings.showTraderChallenges);
});

$("#show-naturalist-challenges").on("change", function () {
  Settings.showNaturalistChallenges = $("#show-naturalist-challenges").prop('checked');
  $("#naturalist-challenges-container").toggleClass('opened', Settings.showNaturalistChallenges);
});

$("#show-completed-challenges").on("change", function () {
  Settings.showCompletedChallenges = $("#show-completed-challenges").prop('checked');
  $("#completed-challenges-container").toggleClass('opened', Settings.showCompletedChallenges);
});

$("#show-nazar-location").on("change", function () {
  Settings.showNazarLocation = $("#show-nazar-location").prop('checked');
  $("#nazar-location-container").toggleClass('opened', Settings.showNazarLocation);
});

$("#show-weekly-collection").on("change", function () {
  Settings.showWeeklyCollection = $("#show-weekly-collection").prop('checked');
  $("#weekly-collection-container").toggleClass('opened', Settings.showWeeklyCollection);
});

$("#show-timers").on("change", function () {
  Settings.showTimers = $("#show-timers").prop('checked');
  $("#timers-container").toggleClass('opened', Settings.showTimers);
});