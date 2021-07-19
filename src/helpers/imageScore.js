const image = [
  'cinco', 'dez', 'quinze', 'vinte', 'vinte5',
  'trinta', 'trinta5', 'quarenta', 'quarenta5', 'cinquenta',
  'cinquenta5', 'sessenta', 'sessenta5', 'setenta', 'setenta5',
  'oitenta', 'oitenta5', 'noventa', 'noventa5', 'cem',
];

const imageScore = (score) => {
  console.log(score);

  const numbers = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
    55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
  ];

  const key = numbers.find((num) => parseInt(score, 10) <= num);
  const indexKey = numbers.indexOf(key);

  return image[indexKey];
};

export default imageScore;
