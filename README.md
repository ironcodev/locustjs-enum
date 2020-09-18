# locustjs-enum
This library provides utilities to define C# enum like objects

example:

```javascript
const Color = Enum.define({ red: 0, green: 1, blue: 2}, 'Color');

console.log(Color.name);							// Color
console.log(Color.green);							// 1
console.log(Color['green']);						// 1
console.log(Color[1]);								// green

console.log(Color.isValid(1));						// true
console.log(Color.isValid(4));						// false
console.log(Color.isValid('green'));				// true
console.log(Color.isValid('Green'));				// false

console.log(Color.equals(Color.red, 0));			// true
console.log(Color.equals(Color.red, '0'));			// true
console.log(Color.equals(Color.red, 'red'));		// true

console.log(Color.getString(Color.red));			// 'red'
console.log(Color.getString('red'));				// 'red'
console.log(Color.getString('0'));					// 'red'
console.log(Color.getString('Yellow'));				// undefined
console.log(Color.getString(5));					// undefined
console.log(Color.getString('Yellow', 'green'));	// 'green'
console.log(Color.getString(5, 'green'));			// 'green'
console.log(Color.getString(5, 'Yellow'));			// 'red'

console.log(Color.getNumber(Color.red));			// 0
console.log(Color.getNumber('red'));				// 0
console.log(Color.getNumber(0));					// 0
console.log(Color.getNumber('0'));					// 0
console.log(Color.getNumber(5));					// undefined
console.log(Color.getNumber(5, 'green'));			// 1
console.log(Color.getNumber(5, 'Yellow'));			// 0

console.log(Color.getNames());	// ['red', 'green', 'blue']
console.log(Color.getValues());	// [0, 1, 2]
console.log(Color.toArray());	// [{ name: 'red', value: 0 }, { name: 'green', value: 1 }, { name: 'blue', value: 2 }]

console.log(Enum.equals(Color(1, 'green'));			// true
console.log(Enum.equals(Color('1', Color.green));	// true
console.log(Enum.equals(Color(1, 'Green'));			// false
console.log(Enum.equals(Color('green', Color.red));	// false
```