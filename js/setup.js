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

var renderName = function () {
  var firstName = getRandomArrIndex(firstNames);
  var lastName = getRandomArrIndex(lastNames);

  return getRandomInt(0, 1) ? (firstName + ' ' + lastName) : (lastName + ' ' + firstName);
};

var createWizardsArr = function (itemsCount) {
  var wizardsArr = [];
  for (var i = 0; i < itemsCount; i++) {
    wizardsArr[i] = {
      name: renderName(),
      coatColor: getRandomArrIndex(coatColors),
      eyesColor: getRandomArrIndex(eyesColors)
    };
  }
  return wizardsArr;
};

var createWizardDomEl = function (obj, template) {
  var domItem = template.cloneNode(true);
  domItem.querySelector('.setup-similar-label').textContent = obj.name;
  domItem.querySelector('.wizard-coat').style.fill = obj.coatColor;
  domItem.querySelector('.wizard-eyes').style.fill = obj.eyesColor;

  return domItem;
};

var renderWizardList = function (renderArr, renderTemplate, fragmentName) {
  for (var i = 0; i < renderArr.length; i++) {
    fragmentName.appendChild(createWizardDomEl(renderArr[i], renderTemplate));
  }
};

var domFragment = document.createDocumentFragment();
var wizards = createWizardsArr(4);
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var wizardsList = document.querySelector('.setup-similar-list');

renderWizardList(wizards, wizardTemplate, domFragment);

wizardsList.appendChild(domFragment);

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
