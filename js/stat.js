'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CAPTION_X = 230;
var GAP = 10;
var BAR_GAP = 50;
var FONT_HEIGHT = 16;
var BAR_WIDTH = 50;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  if (arr.length > 0) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  }
  return maxElement;
};

var getRandomColor = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return 'hsl(240, 100%, ' + randomNumber + '%)';
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
  ctx.fillText(text, x, y);
};

var renderBar = function (ctx, x, y, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, BAR_WIDTH, height);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура вы победили!', CAPTION_X, CLOUD_Y + GAP);
  renderText(ctx, 'Список результатов:', CAPTION_X, CLOUD_Y + GAP * 2 + FONT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    // отсрисовка имени и результата:

    var nameX = CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i;
    var nameY = CLOUD_HEIGHT - FONT_HEIGHT;
    var result = Math.round(times[i]);
    var resultX = CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i;
    var resultY = CLOUD_HEIGHT - FONT_HEIGHT * 2 - FONT_HEIGHT - BAR_HEIGHT * times[i] / maxTime;
    renderText(ctx, names[i], nameX, nameY);
    renderText(ctx, result, resultX, resultY);

    // отрисовка колонок:

    var barColor = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomColor(0, 100);
    var barX = CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i;
    var barY = CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - FONT_HEIGHT - GAP;
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    renderBar(ctx, barX, barY, barHeight, barColor);
  }
};
