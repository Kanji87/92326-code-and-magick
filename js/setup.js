'use strict';

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
    name: renderName(true),
    coatColor: getRandomArrIndex(coatColors),
    eyesColor: getRandomArrIndex(eyesColors)
  },
  {
    name: renderName(true),
    coatColor: getRandomArrIndex(coatColors),
    eyesColor: getRandomArrIndex(eyesColors)
  }
];

var createWizardDomEl = function (obj, template) {
  var domItem = template.cloneNode(true);
  domItem.querySelector('.setup-similar-label').textContent = obj.name;
  domItem.querySelector('.wizard-coat').style.fill = obj.coatColor;
  domItem.querySelector('.wizard-eyes').style.fill = obj.eyesColor;

  return domItem;
};

var renderWizardList = function (renderArr, renderContainer, renderTemplate) {
  for (var i = 0; i < renderArr.length; i++) {
    renderContainer.appendChild(createWizardDomEl(renderArr[i], renderTemplate));
  }
};

var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardsList = document.querySelector('.setup-similar-list');

renderWizardList(wizards, wizardsList, wizardTemplate);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
