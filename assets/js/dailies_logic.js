
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

  $("#daily-challenges-counter-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${TotalChallengesCompleted}.png`);
  $("#daily-challenges-counter-widget-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${DailyChallengesCompleted}.png`);
  $("#daily-challenges-counter-title-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${DailyChallengesCompleted}.png`);
  $("#general-challenges-counter-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${GeneralChallengesCompleted}.png`);

  $("#bounty-challenges-counter-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${BountyChallengesCompleted}.png`);
  $("#trader-challenges-counter-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${TraderChallengesCompleted}.png`);
  $("#collector-challenges-counter-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${CollectorChallengesCompleted}.png`);
  $("#moonshiner-challenges-counter-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${MoonshinerChallengesCompleted}.png`);
  $("#naturalist-challenges-counter-icon").prop('src', `${DailyChallengesIcons}daily_challenge_toast_${NaturalistChallengesCompleted}.png`);

  $("#general-challenges-toggle").prop('class', 'daily-challenges-toggle' + GeneralChallengesCompleted + '-wrapper');
  $("#bounty-challenges-toggle").prop('class', 'daily-challenges-toggle' + BountyChallengesCompleted + '-wrapper');
  $("#trader-challenges-toggle").prop('class', 'daily-challenges-toggle' + TraderChallengesCompleted + '-wrapper');
  $("#collector-challenges-toggle").prop('class', 'daily-challenges-toggle' + CollectorChallengesCompleted + '-wrapper');
  $("#moonshiner-challenges-toggle").prop('class', 'daily-challenges-toggle' + MoonshinerChallengesCompleted + '-wrapper');
  $("#naturalist-challenges-toggle").prop('class', 'daily-challenges-toggle' + NaturalistChallengesCompleted + '-wrapper');
}

