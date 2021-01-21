$(function () {
  try {
    initDailiesLogic();
  } catch (e) {
    console.error(e);
  }
});

function initDailiesLogic() {
  var input = $('#DailyChallengesGoldMultipler');
  input.value = Settings.DailyChallengesGoldMultipler;

  input.on('change', function () {
    Settings.DailyChallengesGoldMultipler = this.value; // change localStorage on change
  });
  SettingProxy.addListener(Settings, 'DailyChallengesGoldMultipler', DailyChallengesGoldCounter);

  var checkboxValue = JSON.parse(localStorage.getItem('checkboxValue')) || {};
  var $checkbox = $('.challenge-input-container :checkbox');

  $checkbox.on('change', function () {
    $checkbox.each(function () {
      checkboxValue[this.id] = !!this.checked;
    });
    localStorage.setItem('checkboxValue', JSON.stringify(checkboxValue));
  });

  //on page load
  $.each(checkboxValue, function (key, value) {
    $('#' + key).prop('checked', value);
  });

  $('.general-challenge-input-checkbox, .challenge-input-checkbox').on('click', function () {
    var GeneralChecked = 0;
    var generalChallenges = $('.general-challenge-input-checkbox');
    $.each(generalChallenges, function () {
      GeneralChecked += +$(this).prop('checked');
    });
    $('.challenge-input-checkbox-general').prop('checked', GeneralChecked >= [...generalChallenges].length);

    var RolesChecked = 0;
    var roleChallenges = $('.challenge-input-checkbox');
    $.each(roleChallenges, function () {
      RolesChecked += +$(this).prop('checked');
    });
    $('.challenge-input-checkbox-roles').prop('checked', RolesChecked >= 9);
  });

  $(':checkbox').on('change', function () {
    DailyChallengesCounter();
    DailyChallengesGoldCounter();
  }).triggerHandler('change');

  $('.reset-dailies button').on('click', function (event) {
    if (event.target.id === 'all-dailies') {
      [...$(':checkbox')].forEach(function (checkbox) {
        $(checkbox).prop('checked', false);
      });
    }
    if (event.target.id === 'general-dailies') {
      [...$('.general-challenge-input-checkbox')].forEach(function (checkbox) {
        $(checkbox).prop('checked', false);
      });
    }
    if (event.target.id === 'role-dailies') {
      [...$('.challenge-input-checkbox')].forEach(function (checkbox) {
        $(checkbox).prop('checked', false);
      });
    }
    $checkbox.triggerHandler('change');
    DailyChallengesCounter();
    DailyChallengesGoldCounter();
  });
};

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

function DailyChallengesGoldCounter() {
  var GeneralChallengesGoldCount = $(`input[class='general-challenge-input-checkbox']:checked`).length;
  var RolesChallengesGoldCount = $(`input[class='challenge-input-checkbox']:checked`).length;
  var DailyChallengesGoldCount = (GeneralChallengesGoldCount + RolesChallengesGoldCount);
  var RoleChallengesCompletedGoldCount = $(`input[class='challenge-input-checkbox-roles']:checked`).length;
  var GeneralChallengesCompletedGoldCount = $(`input[class='challenge-input-checkbox-general']:checked`).length;
  var DailyChallengesGoldMultiplerValue = $('#DailyChallengesGoldMultipler')[0];
  var DailyChallengesGoldValue = DailyChallengesGoldMultiplerValue.options[DailyChallengesGoldMultiplerValue.selectedIndex].value;
  var DailyRoleChallengesGold = DailyChallengesGoldValue * RoleChallengesCompletedGoldCount * 3;
  var DailyGeneralChallengesGold = DailyChallengesGoldValue * GeneralChallengesCompletedGoldCount * 3;

  //var DailyChallengesGold = DailyChallengesGoldValue * DailyChallengesGoldCount;
  var DailyChallengesGoldTotal = DailyGeneralChallengesGold + DailyRoleChallengesGold;
  var DailyChallengesGold = (DailyChallengesGoldTotal + DailyChallengesGoldValue * DailyChallengesGoldCount).toFixed(2);

  $('#daily-challenges-gold').text(DailyChallengesGold);
}
