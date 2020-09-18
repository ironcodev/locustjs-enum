"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseEnum = exports.default = void 0;

var _locustjsBase = require("locustjs-base");

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseEnum = /*#__PURE__*/function () {
  function BaseEnum(values, name) {
    _classCallCheck(this, BaseEnum);

    this.name = name;

    if ((0, _locustjsBase.isArray)(values)) {
      for (var i; i < values.length; i++) {
        var value = values[i];

        if ((0, _locustjsBase.isPrimitive)(value)) {
          this[i] = value;
          this[value] = i;
        }
      }
    } else if ((0, _locustjsBase.isSomeObject)(values)) {
      for (var _i = 0, _Object$keys = Object.keys(values); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var _value = values[key];

        if ((0, _locustjsBase.isPrimitive)(_value)) {
          this[key] = _value;
          this[_value] = key;
        }
      }
    }
  }

  _createClass(BaseEnum, [{
    key: "equals",
    value: function equals(value1, value2) {
      return Enum.equals(this, value1, value2);
    }
  }, {
    key: "getNames",
    value: function getNames() {
      var result = [];

      for (var _i2 = 0, _Object$keys2 = Object.keys(this); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];

        if (typeof key == 'string' && (0, _locustjsBase.isPrimitive)(this[key]) && !(0, _locustjsBase.isNumeric)(key) && key != 'name') {
          result.push(key);
        }
      }

      return result;
    }
  }, {
    key: "getValues",
    value: function getValues() {
      var result = [];

      for (var _i3 = 0, _Object$keys3 = Object.keys(this); _i3 < _Object$keys3.length; _i3++) {
        var key = _Object$keys3[_i3];

        if (typeof key == 'string' && (0, _locustjsBase.isPrimitive)(this[key]) && !(0, _locustjsBase.isNumeric)(key) && key != 'name') {
          result.push(this[key]);
        }
      }

      return result;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var result = [];

      for (var _i4 = 0, _Object$keys4 = Object.keys(this); _i4 < _Object$keys4.length; _i4++) {
        var key = _Object$keys4[_i4];

        if (typeof key == 'string' && (0, _locustjsBase.isPrimitive)(this[key]) && !(0, _locustjsBase.isNumeric)(key) && key != 'name') {
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
        for (var _i5 = 0, _Object$keys5 = Object.keys(this); _i5 < _Object$keys5.length; _i5++) {
          var key = _Object$keys5[_i5];

          if (typeof key == 'string' && (0, _locustjsBase.isPrimitive)(this[key]) && !(0, _locustjsBase.isNumeric)(key) && key != 'name') {
            defaultValue = key;
            break;
          }
        }
      }

      var result = this.isValid(value) ? value : defaultValue ? defaultValue : undefined;

      if (result != undefined) {
        if (typeof result != 'string') {
          result = this[result];
        }
      }

      return result;
    }
  }, {
    key: "getNumber",
    value: function getNumber(value, defaultValue) {
      if (!this.isValid(defaultValue)) {
        for (var _i6 = 0, _Object$keys6 = Object.keys(this); _i6 < _Object$keys6.length; _i6++) {
          var key = _Object$keys6[_i6];

          if (typeof key == 'string' && (0, _locustjsBase.isPrimitive)(this[key]) && !(0, _locustjsBase.isNumeric)(key) && key != 'name') {
            defaultValue = key;
            break;
          }
        }
      }

      var result = this.isValid(value) ? value : defaultValue ? defaultValue : undefined;

      if (result != undefined) {
        if (!(0, _locustjsBase.isNumeric)(result)) {
          result = this[result];
        }
      }

      return result;
    }
  }]);

  return BaseEnum;
}();

exports.BaseEnum = BaseEnum;
var Enum = {
  define: function define(values, name) {
    var result = Object.freeze(new BaseEnum(values, name));
    return result;
  },
  equals: function equals(enumType, value1, value2) {
    var result = false;

    if ((0, _locustjsBase.isSomeObject)(enumType) && (0, _locustjsBase.isPrimitive)(value1) && (0, _locustjsBase.isPrimitive)(value2)) {
      if ((0, _locustjsBase.isNumeric)(value1)) {
        if ((0, _locustjsBase.isNumeric)(value2)) {
          result = value1 == value2 && enumType[value1] != undefined;
        } else {
          result = value1 == enumType[value2];
        }
      } else {
        if ((0, _locustjsBase.isNumeric)(value2)) {
          result = value1 == enumType[value2];
        } else {
          result = value1 == value2 && enumType[value1] != undefined;
        }
      }
    }

    return result;
  }
};
var _default = Enum;
exports.default = _default;