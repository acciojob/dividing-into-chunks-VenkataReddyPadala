const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [arr[i]];
    let sum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (sum + arr[j] > n) {
        break;
      }
      temp.push(arr[j]);
      sum += arr[j];
    }

    result.push(temp);
    i = i + temp.length - 1;
  }

  return result;
};


const n = Number(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
