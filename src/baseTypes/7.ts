/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Mon = 'weekday',
  Tue = 'weekday',
  Wed = 'weekday',
  Thu = 'weekday',
  Fri = 'weekday',
  Sat = 'weekend',
  Sun = 'weekend',
}

function isWeekend(day: Days): boolean {
  if (day === 'weekday') {
    return false;
  }
  return true;
}

console.log(isWeekend(Days.Thu));
