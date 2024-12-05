"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BaseEnum = void 0;
var _base = require("@locustjs/base");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var NameProp = Symbol();
var BaseEnum = /*#__PURE__*/function () {
  function BaseEnum(values, name) {
    _classCallCheck(this, BaseEnum);
    this[NameProp] = name;
    if ((0, _base.isArray)(values)) {
      for (var i; i < values.length; i++) {
        var value = values[i];
        if ((0, _base.isPrimitive)(value)) {
          this[i] = value;
          this[value] = i;
        }
      }
    } else if ((0, _base.isSomeObject)(values)) {
      for (var _i = 0, _Object$keys = Object.keys(values); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        var _value = values[key];
        if ((0, _base.isPrimitive)(_value)) {
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
    key: "name",
    get: function get() {
      return this[NameProp];
    }
  }, {
    key: "getNames",
    value: function getNames() {
      var result = [];
      for (var _i2 = 0, _Object$keys2 = Object.keys(this); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];
        if (typeof key == 'string' && (0, _base.isPrimitive)(this[key]) && !(0, _base.isNumeric)(key)) {
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
        if (typeof key == 'string' && (0, _base.isPrimitive)(this[key]) && !(0, _base.isNumeric)(key)) {
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
        if (typeof key == 'string' && (0, _base.isPrimitive)(this[key]) && !(0, _base.isNumeric)(key)) {
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
          if (typeof key == 'string' && (0, _base.isPrimitive)(this[key]) && !(0, _base.isNumeric)(key)) {
            defaultValue = key;
            break;
          }
        }
      }
      var result = this.isValid(value) ? value : defaultValue ? defaultValue : undefined;
      if (result != undefined) {
        if ((0, _base.isNumeric)(result)) {
          result = this[parseInt(result)];
        } else if (typeof result != 'string') {
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
          if (typeof key == 'string' && (0, _base.isPrimitive)(this[key]) && !(0, _base.isNumeric)(key)) {
            defaultValue = key;
            break;
          }
        }
      }
      var result = this.isValid(value) ? value : defaultValue ? defaultValue : undefined;
      if (result != undefined) {
        if (!(0, _base.isNumeric)(result)) {
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
    if ((0, _base.isSomeObject)(enumType) && (0, _base.isPrimitive)(value1) && (0, _base.isPrimitive)(value2)) {
      if ((0, _base.isNumeric)(value1)) {
        if ((0, _base.isNumeric)(value2)) {
          result = value1 == value2 && enumType[value1] != undefined;
        } else {
          result = value1 == enumType[value2];
        }
      } else {
        if ((0, _base.isNumeric)(value2)) {
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
exports["default"] = _default;
