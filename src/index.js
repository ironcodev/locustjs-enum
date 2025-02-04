import {
  isPrimitive,
  isSomeObject,
  isNumeric,
  forEach,
  isString,
} from "@locustjs/base";

const NameProp = Symbol();
class BaseEnum {
  constructor(values, name) {
    this[NameProp] = name;

    forEach(values, ({ key, value }) => {
      if (isPrimitive(value)) {
        this[key] = value;
        this[value] = key;
      }
    });
  }
  equals(value1, value2) {
    return Enum.equals(this, value1, value2);
  }
  get name() {
    return this[NameProp];
  }
  _isKey(key) {
    return isString(key) && isPrimitive(this[key]) && !isNumeric(key);
  }
  getNames() {
    let result = [];

    for (let key of Object.keys(this)) {
      if (this._isKey(key)) {
        result.push(key);
      }
    }

    return result;
  }
  getValues() {
    let result = [];

    for (let key of Object.keys(this)) {
      if (this._isKey(key)) {
        result.push(this[key]);
      }
    }

    return result;
  }
  toArray() {
    let result = [];

    for (let key of Object.keys(this)) {
      if (this._isKey(key)) {
        result.push({ name: key, value: this[key] });
      }
    }

    return result;
  }
  isValid(value) {
    return !(value == null || this[value] == undefined);
  }
  getString(value, defaultValue) {
    if (!this.isValid(defaultValue)) {
      for (let key of Object.keys(this)) {
        if (this._isKey(key)) {
          defaultValue = key;

          break;
        }
      }
    }

    let result = this.isValid(value)
      ? value
      : defaultValue
      ? defaultValue
      : undefined;

    if (result != undefined) {
      if (isNumeric(result)) {
        result = this[parseInt(result)];
      } else if (typeof result != "string") {
        result = this[result];
      }
    }

    return result;
  }
  getNumber(value, defaultValue) {
    if (!this.isValid(defaultValue)) {
      for (let key of Object.keys(this)) {
        if (this._isKey(key)) {
          defaultValue = key;

          break;
        }
      }
    }

    let result = this.isValid(value)
      ? value
      : defaultValue
      ? defaultValue
      : undefined;

    if (result != undefined) {
      if (!isNumeric(result)) {
        result = this[result];
      }
    }

    return result;
  }
}

const Enum = {
  define: function (values, name) {
    const result = Object.freeze(new BaseEnum(values, name));

    return result;
  },
  equals: function (enumObject, value1, value2) {
    let result = false;

    if (isSomeObject(enumObject) && isPrimitive(value1) && isPrimitive(value2)) {
      if (isNumeric(value1)) {
        if (isNumeric(value2)) {
          result = value1 == value2 && enumObject[value1] != undefined;
        } else {
          result = value1 == enumObject[value2];
        }
      } else {
        if (isNumeric(value2)) {
          result = value1 == enumObject[value2];
        } else {
          result = value1 == value2 && enumObject[value1] != undefined;
        }
      }
    }

    return result;
  },
};

export { Enum, BaseEnum };
