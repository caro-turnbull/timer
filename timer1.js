let times = process.argv.slice(2);
for (let time of times) {
  setTimeout(() => {
    process.stdout.write('\007');
  }, time * 1000);
  setTimeout(() => {
    console.log(time);
  }, time * 1000);
}



///  Test Cases from terminal
///10 3 5 15 9

///edge cases
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number:gnore/skip these as well, instead of attempting to call setTimeout with a non-number.