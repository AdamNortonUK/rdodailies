class Dailies {
  constructor(role, localized, target, challengeId) {
    this.role = role;
    this.localized = localized;
    this.target = target;
    this.challengeId = challengeId.toLowerCase();
  }
  static init() {
    this.categories = [];
    this.jsonData = [];
    this.dailiesList = [];
    this.markersCategories = [];
    this.categoryOrder = [];

    [...$('.daily-role')].forEach(role => this.categoryOrder.push($(role)[0].id));

    const dailiesDate = new Date(Date.now() - 216e5).toISOUTCDateString();
    const currentDailies = Loader.promises[`challenges-[${dailiesDate}]`].consumeJson(data => this.dailiesList = data);

    return Promise.all([currentDailies])
      .then(() => {
        this.categoryOrder.forEach(category => {
          $(`.dailies > #${category}`).append($(`<div class="role-name">${category.toUpperCase()}</div>`))
          this.dailiesList[category].forEach(({ goal, daily, challenge }) => {
            SettingProxy.addSetting(DailyChallenges, `${category}_${daily.toLowerCase()}`, {});
            const newDaily = new Dailies(category, challenge, goal, daily);
            newDaily.appendToMenu();
          });
          $(`.dailies > #${category}`).append($(`<div class="timers ${category}_timer"></div>`))
        });
        this.sortDailies();
      })
      .then(this.activateHandlers)
      .catch(this.dailiesNotUpdated)
      .then(this.getGold)
      .then(DailyChallengesCounter)
      .then(Loader.resolveContentLoaded);
  }
  appendToMenu() {
    return $(`.dailies > #${this.role}`)
      .append($(`
          <div class="one-daily-container">
            <span class="counter">${this.target}</span>
            <label class="daily" for="checkbox-${this.role}-${this.challengeId}">${this.localized}</label>
            <span class="daily-checkbox">
              <div class="input-checkbox-wrapper">
                <input class="input-checkbox" type="checkbox" name="checkbox-${this.role}-${this.challengeId}" value="0"
                  id="checkbox-${this.role}-${this.challengeId}" />
                <label class="input-checkbox-label" for="checkbox-${this.role}-${this.challengeId}"></label>
              </div>
            </span>
          </div>
        `))
      .find('.one-daily-container')
      .css('grid-template-areas', `"counter daily-challenge daily-checkbox"`)
      .end()
      .find(`#checkbox-${this.role}-${this.challengeId}`)
      .prop('checked', DailyChallenges[`${this.role}_${this.challengeId}`])
      .on('change', event => {
        const checkbox = $(`#checkbox-${this.role}-${this.challengeId}`);
        DailyChallenges[`${this.role}_${this.challengeId}`] = checkbox.prop('checked');
        DailyChallengesCounter();
        Dailies.getGold();
      })
      .end()
      .triggerHandler('change');
  }
  static dailiesNotUpdated() {
    $('.dailies').append($('<div class="daily-status not-found">Dailies not updated</div>'));
  }
  static sortDailies() {
    const $roleContainers = $('.daily-role');
    [...$roleContainers].forEach(roleContainer => {
      const dailies = $(roleContainer).children('.one-daily-container');
      const sortedDailies = [...dailies].sort((...args) => {
        const [a, b] = args.map(dailyContainer =>
          $(dailyContainer).find('label.daily').text().toLowerCase());
        return a.localeCompare(b, Settings.language, { sensitivity: 'base' });
      });
      $(roleContainer).append(sortedDailies);
    });
  }
  static activateHandlers() {
    $('#DailyChallengesGoldMultipler').on('change', function () {
      Settings.DailyChallengesGoldMultipler = this.value;
    }).triggerHandler('change');

    SettingProxy.addListener(Settings, 'DailyChallengesGoldMultipler', Dailies.getGold);

    $('.reset-dailies button').on('click', event => {
      if (event.target.id === 'all-dailies') {
        [...$(':checkbox')].forEach(checkbox => {
          $(checkbox).prop('checked', false).triggerHandler('change');
        });
      }
      if (event.target.id === 'general-dailies') {
        [...$(`.dailies > #general :checkbox`)].forEach(checkbox => {
          $(checkbox).prop('checked', false).triggerHandler('change');
        });
      }
      if (event.target.id === 'role-dailies') {
        [...$(`.dailies > *:not(#general) :checkbox`)].forEach(checkbox => {
          $(checkbox).prop('checked', false).triggerHandler('change');
        });
      }
      DailyChallengesCounter();
      Dailies.getGold();
    });
  }
  static getGold() {
    const generalChecked = $(`.dailies > #general :checkbox:checked`).length;
    const roleChecked = $(`.dailies > *:not(#general) :checkbox:checked`).length;
    const completed = generalChecked + roleChecked;
    const value = (completed * $('#DailyChallengesGoldMultipler')[0].value).toFixed(2);

    [...$(`.dailies > #general .one-daily-container`)].forEach(daily => {
      $(daily).css('opacity', generalChecked >= 7 ? .3 : 1);
    });
    [...$(`.dailies > *:not(#general) .one-daily-container`)].forEach(daily => {
      $(daily).css('opacity', roleChecked >= 9 ? .3 : 1);
    });

    $('#daily-challenges-gold').text(value);
    return [generalChecked, roleChecked, value];
  }
};