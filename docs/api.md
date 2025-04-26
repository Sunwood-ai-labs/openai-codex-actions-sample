# API Documentation

This document provides an overview of all public functions, classes, and methods in the `src/` directory, along with usage examples.

## JavaScript API

### findLargestNumber(numbers)

Description: Finds the largest number in an array. Returns `null` if input is not an array or the array is empty.

**Signature**  
```js
findLargestNumber(numbers: number[]): number | null
```

**Parameters**  
- `numbers` (number[]): Array of numbers.

**Returns**  
- `number | null`: The largest number, or `null` if the array is empty or invalid.

**Example**  
```js
const { findLargestNumber } = require('../src/example');  
console.log(findLargestNumber([3, 1, 4, 1, 5, 9])); // Output: 9  
```

### reverseString(str)

Description: Reverses the given string.

**Signature**  
```js
reverseString(str: string): string
```

**Parameters**  
- `str` (string): Input string.

**Returns**  
- `string`: The reversed string.

**Throws**  
- `TypeError`: If the input is not a string.

**Example**  
```js
const { reverseString } = require('../src/example');  
console.log(reverseString('Hello, World!')); // Output: !dlroW ,olleH  
```

### Calculator

Description: Provides basic arithmetic operations.

```js
class Calculator
```

#### constructor()

Creates a new `Calculator` instance.

#### add(a, b)

**Signature**  
```js
add(a: number, b: number): number
```

**Description**  
Adds two numbers.

**Parameters**  
- `a` (number): First operand.  
- `b` (number): Second operand.

**Returns**  
- `number`: Sum of `a` and `b`.

**Throws**  
- `TypeError`: If either argument is not a number.

**Example**  
```js
const { Calculator } = require('../src/example');  
const calc = new Calculator();  
console.log(calc.add(5, 3)); // Output: 8  
```

#### subtract(a, b)

**Signature**  
```js
subtract(a: number, b: number): number
```

**Description**  
Subtracts the second number from the first.

**Parameters**  
- `a` (number): First operand.  
- `b` (number): Second operand.

**Returns**  
- `number`: Result of `a - b`.

**Throws**  
- `TypeError`: If either argument is not a number.

**Example**  
```js
const calc = new Calculator();  
console.log(calc.subtract(5, 3)); // Output: 2  
```

#### multiply(a, b)

**Signature**  
```js
multiply(a: number, b: number): number
```

**Description**  
Multiplies two numbers.

**Parameters**  
- `a` (number): First operand.  
- `b` (number): Second operand.

**Returns**  
- `number`: Product of `a` and `b`.

**Throws**  
- `TypeError`: If either argument is not a number.

**Example**  
```js
const calc = new Calculator();  
console.log(calc.multiply(5, 3)); // Output: 15  
```

#### divide(a, b)

**Signature**  
```js
divide(a: number, b: number): number
```

**Description**  
Divides the first number by the second.

**Parameters**  
- `a` (number): Dividend.  
- `b` (number): Divisor.

**Returns**  
- `number`: Quotient of `a / b`.

**Throws**  
- `Error`: If dividing by zero.  
- `TypeError`: If either argument is not a number.

**Example**  
```js
const calc = new Calculator();  
console.log(calc.divide(5, 2)); // Output: 2.5  
```

---

## Python API

### calculate_fibonacci(n)

Description: Calculates the nth Fibonacci number (0-indexed).

**Signature**  
```python
calculate_fibonacci(n: int) -> int
```

**Parameters**  
- `n` (int): Index in the Fibonacci sequence.

**Returns**  
- `int`: The nth Fibonacci number.

**Raises**  
- `ValueError`: If `n` is negative.

**Example**  
```python
from src.example import calculate_fibonacci  
print(calculate_fibonacci(10))  # Output: 55  
```

### is_palindrome(text)

Description: Determines whether the given string is a palindrome, ignoring case and non-alphanumeric characters.

**Signature**  
```python
is_palindrome(text: str) -> bool
```

**Parameters**  
- `text` (str): Input string.

**Returns**  
- `bool`: `True` if palindrome, otherwise `False`.

**Example**  
```python
from src.example import is_palindrome  
print(is_palindrome('A man, a plan, a canal: Panama'))  # Output: True  
```

### Stack

Description: Implements a stack (LIFO) data structure.

```python
class Stack
```

#### __init__()

Initializes a new empty stack.

**Example**  
```python
from src.example import Stack  
stack = Stack()  
```

#### push(item)

**Signature**  
```python
push(item: Any) -> None
```

**Description**  
Pushes an item onto the stack.

**Parameters**  
- `item` (Any): Element to push.

**Example**  
```python
stack.push(1)  
```

#### pop()

**Signature**  
```python
pop() -> Any
```

**Description**  
Removes and returns the top item of the stack.

**Returns**  
- Top element of the stack.

**Raises**  
- `IndexError`: If the stack is empty.

**Example**  
```python
stack.push(2)  
print(stack.pop())  # Output: 2  
```

#### peek()

**Signature**  
```python
peek() -> Any
```

**Description**  
Returns the top item without removing it.

**Raises**  
- `IndexError`: If the stack is empty.

**Example**  
```python
stack.push(3)  
print(stack.peek())  # Output: 3  
```

#### is_empty()

**Signature**  
```python
is_empty() -> bool
```

**Description**  
Checks if the stack is empty.

**Returns**  
- `bool`: `True` if empty, otherwise `False`.

**Example**  
```python
print(stack.is_empty())  # Output: True  
```

#### size()

**Signature**  
```python
size() -> int
```

**Description**  
Returns the number of items in the stack.

**Returns**  
- `int`: Number of items.

**Example**  
```python
stack.push(4)  
print(stack.size())  # Output: 1  
```