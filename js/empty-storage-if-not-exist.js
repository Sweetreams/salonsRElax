const storeImplementation = () => ({
  _data: {},
  setItem: function (id, val) {
    return (this._data[id] = String(val));
  },
  getItem: function (id) {
    return Object.prototype.hasOwnProperty.call(this._data, id) ? this._data[id] : null;
  },
  removeItem: function (id) {
    return delete this._data[id];
  },
  clear: function () {
    return (this._data = {});
  },
});

try {
  if (!window.localStorage) {
    window.localStorage = storeImplementation();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (e) {
  const obj = storeImplementation();
  Object.defineProperty(
    window,
    'localStorage',
    new (function () {
      this.get = function () {
        return obj;
      };
    })()
  );
  // window.localStorage = storeImplementation();
}

try {
  if (!window.sessionStorage) {
    window.sessionStorage = storeImplementation();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
} catch (e) {
  const obj = storeImplementation();
  Object.defineProperty(
    window,
    'sessionStorage',
    new (function () {
      this.get = function () {
        return obj;
      };
    })()
  );
}
