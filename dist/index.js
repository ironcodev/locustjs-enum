'use strict';

var base = require('@locustjs/base');

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (undefined !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

var NameProp = Symbol();
var BaseEnum = /*#__PURE__*/function () {
  function BaseEnum(values, name) {
    var _this = this;
    _classCallCheck(this, BaseEnum);
    this[NameProp] = name;
    base.forEach(values, function (_ref) {
      var key = _ref.key,
        value = _ref.value;
      if (base.isPrimitive(value)) {
        _this[key] = value;
        _this[value] = key;
      }
    });
  }
  return _createClass(BaseEnum, [{
    key: "equals",
    value: function equals(value1, value2) {
      return Enum.equals(this, value1, value2);
    }
  }, {
    key: "name",
    get: function get() {
      return this[NameProp];
    }
  }, {
    key: "_isKey",
    value: function _isKey(key) {
      return base.isString(key) && base.isPrimitive(this[key]) && !base.isNumeric(key);
    }
  }, {
    key: "getNames",
    value: function getNames() {
      var result = [];
      for (var _i = 0, _Object$keys = Object.keys(this); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        if (this._isKey(key)) {
          result.push(key);
        }
      }
      return result;
    }
  }, {
    key: "getValues",
    value: function getValues() {
      var result = [];
      for (var _i2 = 0, _Object$keys2 = Object.keys(this); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];
        if (this._isKey(key)) {
          result.push(this[key]);
        }
      }
      return result;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var result = [];
      for (var _i3 = 0, _Object$keys3 = Object.keys(this); _i3 < _Object$keys3.length; _i3++) {
        var key = _Object$keys3[_i3];
        if (this._isKey(key)) {
          result.push({
            name: key,
            value: this[key]
          });
        }
      }
      return result;
    }
  }, {
    key: "isValid",
    value: function isValid(value) {
      return !(value == null || this[value] == undefined);
    }
  }, {
    key: "getString",
    value: function getString(value, defaultValue) {
      if (!this.isValid(defaultValue)) {
        for (var _i4 = 0, _Object$keys4 = Object.keys(this); _i4 < _Object$keys4.length; _i4++) {
          var key = _Object$keys4[_i4];
          if (this._isKey(key)) {
            defaultValue = key;
            break;
          }
        }
      }
      var result = this.isValid(value) ? value : defaultValue ? defaultValue : undefined;
      if (result != undefined) {
        if (base.isNumeric(result)) {
          result = this[parseInt(result)];
        } else if (typeof result != "string") {
          result = this[result];
        }
      }
      return result;
    }
  }, {
    key: "getNumber",
    value: function getNumber(value, defaultValue) {
      if (!this.isValid(defaultValue)) {
        for (var _i5 = 0, _Object$keys5 = Object.keys(this); _i5 < _Object$keys5.length; _i5++) {
          var key = _Object$keys5[_i5];
          if (this._isKey(key)) {
            defaultValue = key;
            break;
          }
        }
      }
      var result = this.isValid(value) ? value : defaultValue ? defaultValue : undefined;
      if (result != undefined) {
        if (!base.isNumeric(result)) {
          result = this[result];
        }
      }
      return result;
    }
  }]);
}();
var Enum = {
  define: function define(values, name) {
    var result = Object.freeze(new BaseEnum(values, name));
    return result;
  },
  equals: function equals(enumObject, value1, value2) {
    var result = false;
    if (base.isSomeObject(enumObject) && base.isPrimitive(value1) && base.isPrimitive(value2)) {
      if (base.isNumeric(value1)) {
        if (base.isNumeric(value2)) {
          result = value1 == value2 && enumObject[value1] != undefined;
        } else {
          result = value1 == enumObject[value2];
        }
      } else {
        if (base.isNumeric(value2)) {
          result = value1 == enumObject[value2];
        } else {
          result = value1 == value2 && enumObject[value1] != undefined;
        }
      }
    }
    return result;
  }
};

exports.BaseEnum = BaseEnum;
exports.Enum = Enum;
