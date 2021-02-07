Object.defineProperty(Date.prototype, 'toISOUTCDateString', {
  value: function () {
    return this.toISOString().split('T')[0];
  },
});

class Loader {
  static init(urls) {
    this.urls = urls;
    this.promises = {};
    urls.forEach(url => {
      const name = url.split('/').pop().split('.', 1)[0];
      this.promises[name] = new Loader(name, url);
    });
    this.contentLoaded = new Promise(resolve => this.resolveContentLoaded = resolve);
  }
  constructor(name, url, customNoCache = null) {
    const queryString = {};
    if (!url.startsWith('http')) queryString.nocache = customNoCache || nocache;
    else queryString.nocache = customNoCache || new Date(Date.now() - 21600000).toISOUTCDateString();

    if (['lang_progress'].includes(name)) queryString.date = customNoCache || new Date().toISOUTCDateString();

    this._json = $.getJSON(url, queryString);
  }
  // allow garbage collection of loaded data after use
  consumeJson(...args) {
    const json = this._json;
    delete this._json;
    return json.then(...args);
  }
  static reloadData(name) {
    delete this.promises[name];
    const url = this.urls.find(url => url.split('/').pop().split('.', 1)[0] === name);
    this.promises[name] = new Loader(name, url, Date.now());
  }
  static replaceData(url) {
    // 
  }
}

const time = {
  now: new Date(),
  offset: 0,
}
const now = new Date(Date.UTC(
  time.now.getUTCFullYear(),
  time.now.getUTCMonth(),
  time.now.getUTCDate() + time.offset,
));

const urls = [
  //'https://rdocdn.xyz/api/dailies.php',
  `https://rdocdn.xyz/api/data/challenges/${now.getUTCFullYear()}/${now.getUTCFullYear()}-${(now.getUTCMonth() + 1).toString().padStart(2, 0)}/challenges-[${now.toISOUTCDateString()}].json`,
];

Loader.init(urls);
