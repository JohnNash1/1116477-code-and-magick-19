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

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CAPTION_X, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CAPTION_X, CLOUD_Y + GAP * 2 + FONT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_HEIGHT * 2 - FONT_HEIGHT - BAR_HEIGHT * times[i] / maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, 100%, ' + String(getRandom(0, 100)) + '%)';
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - FONT_HEIGHT - GAP, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
  }
};
