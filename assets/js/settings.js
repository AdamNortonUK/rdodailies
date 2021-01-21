const SettingProxy = (function () {
  'use strict';
  const _domain = Symbol('domain');
  const _proxyConfig = Symbol('proxyConfig');
  const settingHandler = {
    _checkAndGetSettingConfig: function (proxyConfig, name, errorType) {
      if (!proxyConfig.has(name)) {
        throw new errorType(`"${name}" is not configured as a persisted setting.`);
      } else {
        return proxyConfig.get(name);
      }
    },
    get: function (proxyConfig, name) {
      if (name === _proxyConfig) return proxyConfig;

      const config = settingHandler._checkAndGetSettingConfig(proxyConfig, name, ReferenceError);
      if ('value' in config) return config.value;

      let value = localStorage.getItem(config.settingName);

      if (value === null) {
        value = config.default;
      } else {
        try {
          // JSON.parse might raise SyntaxError, bc the setting is malformed
          value = config.type(JSON.parse(value));
        }
        catch (e) {
          value = config.default;
        }
      }

      value = config.filter(value) ? value : config.default;

      config.value = value;

      return config.value;
    },
    set: function (proxyConfig, name, value) {
      const config = settingHandler._checkAndGetSettingConfig(proxyConfig, name, TypeError);
      if (value === config.default) {
        localStorage.removeItem(config.settingName);
      } else {
        localStorage.setItem(config.settingName, JSON.stringify(value));
      }
      if (!('value' in config) || config.value !== value) {
        const resolved = Promise.resolve();
        config.listeners.forEach(callback => resolved.then(callback));
      }
      config.value = value;
      return true;
    },
  };

  return {
    createSettingProxy: function (domain) {
      return new Proxy(new Map([[_domain, domain]]), settingHandler);
    },
    addSetting: function (settingProxy, name, config = {}) {
      const proxyConfig = settingProxy[_proxyConfig];
      if (proxyConfig.has(name)) {
        throw new TypeError(`A setting was already registered as ${name}.`);
      }
      config = Object.assign(Object.create(null), config);
      delete config.value;
      config.listeners = [];
      if (!('default' in config)) {
        config.default = 'type' in config ? config.type() : false;
      }
      if (!('type' in config)) {
        const defaultType = typeof config.default;
        const basicTypes = { 'boolean': Boolean, 'string': String, 'number': Number };
        config.type = defaultType in basicTypes ? basicTypes[defaultType] : x => x;
      }
      if (!('filter' in config)) {
        config.filter = x => true;
      }
      if (!('settingName' in config)) {
        config.settingName = `${proxyConfig.get(_domain)}.${name}`;
      }
      proxyConfig.set(name, config);
    },
    addListener: function (settingProxy, names, callback) {
      const proxyConfig = settingProxy[_proxyConfig];
      names = Array.isArray(names) ? names : names.split(' ');
      names.forEach(name => {
        settingHandler
          ._checkAndGetSettingConfig(proxyConfig, name, ReferenceError)
          .listeners.push(callback);
      });
      return callback;
    },
  };
})();

// General settings
const Settings = SettingProxy.createSettingProxy('main');
Object.entries({
  language: { default: 'en' },
  showGeneralChallenges: { default: true },
  showBountyChallenges: { default: true },
  showBountyHunterChallenges: { default: true },
  showCollectorChallenges: { default: true },
  showMoonshinerChallenges: { default: true },
  showNaturalistChallenges: { default: true },
  showTraderChallenges: { default: true },
  showCompletedChallenges: { default: true },
  showTimers: { default: true },
  showNazarLocation: { default: true },
  showWeeklyCollection: { default: true },
  DailyChallengesGoldMultipler: { default: "0.10" }, // it should start from small letter but it is temporary to make it backward compatible
}).forEach(([name, config]) => SettingProxy.addSetting(Settings, name, config));