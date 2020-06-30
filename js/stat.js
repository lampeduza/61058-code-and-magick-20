var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // отступ
var BAR_GAP = 50; // размер отступа
var BAR_WIDTH = 50; // ширина колонки
var TEXT_WIDTH = 40; // ширина текста
var MAX_BAR_HEIGHT = 150;

/*
var FONT_GAP = 15;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
*/

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/*
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};
*/

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 40 + (GAP * 2));

  /*

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }
  */
};

















/*
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 40;
var BAR_WIDTH = 40;
var MAX_BAR_WIDTH = 150;
var BAR_HEIGHT = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  // a first result
  ctx.fillText('2725', 140, 130);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(140, 140, 50, 100);
  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 140, 270);

  // a second result
  ctx.fillText('4025', 240, 90);
  ctx.fillStyle = 'hsl(250, 100%, 30%)';
  ctx.fillRect(240, 100, 50, 140);
  ctx.fillStyle = '#000';
  ctx.fillText('Кекс', 240, 270);

  // a third result
  ctx.fillText('1244', 340, 180);
  ctx.fillStyle = 'hsl(250, 10%, 50%)';
  ctx.fillRect(340, 190, 50, 50);
  ctx.fillStyle = '#000';
  ctx.fillText('Катя', 340, 270);

  // a fourth result
  ctx.fillText('1339', 440, 175);
  ctx.fillStyle = 'hsl(250, 10%, 40%)';
  ctx.fillRect(440, 185, 50, 55);
  ctx.fillStyle = '#000';
  ctx.fillText('Игорь', 440, 270);
};

*/
