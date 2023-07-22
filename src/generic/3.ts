/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T>(objA: T, objB: T): T {
  return Object.assign({}, objA, objB);
}

const obj1 = {
  a: 21,
  b: 34,
};

const obj4 = {
  a: 281,
};

merge(obj1, obj4);

export {};
