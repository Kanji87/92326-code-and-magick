'use strict';
document.querySelector('.setup').classList.remove('hidden');

var firstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var lastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomArrIndex = function (arr) {
  return arr[getRandomInt(0, arr.length - 1)];
};

var renderName = function (isRandom) {
  // var firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
  // var lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
  var firstName = getRandomArrIndex(firstNames);
  var lastName = getRandomArrIndex(lastNames);
  var name = firstName + ' ' + lastName;
  if (isRandom === true) {
    if (getRandomInt(0, 1)) {
      name = lastName + ' ' + firstName;
    }
  }
  return name;
};

var wizards = [
  {
    name: renderName(),
    coatColor: getRandomArrIndex(coatColors),
    eyesColor: getRandomArrIndex(eyesColors)
  },
  {
    name: renderName(),
    coatColor: getRandomArrIndex(coatColors),
    eyesColor: getRandomArrIndex(eyesColors)
  },
  {
    name: renderName(),
    coatColor: getRandomArrIndex(coatColors),
    eyesColor: getRandomArrIndex(eyesColors)
  },
  {
    name: renderName(),
    coatColor: getRandomArrIndex(coatColors),
    eyesColor: getRandomArrIndex(eyesColors)
  }
];
