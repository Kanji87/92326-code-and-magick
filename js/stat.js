'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, .7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // функция считает вычисляет значение в массиве
  var getMaxValFromArr = function (arr) {
    var maxVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (maxVal < arr[i]) {
        maxVal = arr[i];
      }
    }
    return maxVal;
  };

  var colSpace = 50; // расстояние между колонками
  var colWidth = 40; // ширина колонки
  var histogramHeight = 150; // максимальная высота нашего графика
  var initX = 150; // позиция начала графика слева
  var initY = 270; // позиция начала графика снизу
  var lineHeight = 20; // высота линии текста
  var textColor = '#000'; // цвет текста
  var maxTime = getMaxValFromArr(times); // максимальное время прохождения игры

  for (var i = 0; i < times.length; i++) {
    var colHeight = Math.floor((times[i] * histogramHeight) / maxTime); // высота колонки
    var randOpacity = parseFloat(Math.random().toFixed(1)) || 0.1; // случайная прозрачность для колонок других игроков
    var colColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + randOpacity + ')'; // если рисуем нашу колонку, то ее цвет будет красным, остальные синие со случайной прозрачностью
    var textPosX = initX + (colWidth + colSpace) * i; // позиция текста по оси X
    var timePosY = initY - lineHeight * 1.5 - colHeight; // позиция времени по оси Y
    var colPosX = initX + (colWidth + colSpace) * i; // позиция колонки по оси X
    var colPosY = initY - lineHeight - colHeight; // позиция колонки по оси Y
    var colTime = Math.floor(times[i]); // время прохождения игры

    ctx.fillStyle = textColor; // задаем цвет для текста
    ctx.fillText(colTime, textPosX, timePosY); // пишем время
    ctx.fillText(names[i], textPosX, initY); // пишем имя
    ctx.fillStyle = colColor; // задаем цвет для колонки
    ctx.fillRect(colPosX, colPosY, colWidth, colHeight); // рисуем саму колонку
  }
};
