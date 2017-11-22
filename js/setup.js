'use strict';
document.querySelector('.setup').classList.remove('hidden');

var wizardFirstNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var wizardLastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var renderName = function (isRandom) {
  var firstName = wizardFirstNames[getRandomInt(0, wizardFirstNames.length - 1)];
  var lastName = wizardLastNames[getRandomInt(0, wizardLastNames.length - 1)];
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
    name: renderName()
  }
];
