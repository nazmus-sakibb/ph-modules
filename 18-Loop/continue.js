let numbers = [45, 56, 23, 54, 82, 90, 22, 87];

for (i = 0; i < numbers.length; i++) {

    if (numbers[i] > 80) {
        continue;
    }

    console.log(numbers[i]);
}