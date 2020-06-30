var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10; // отступ
var FONT_GAP = 15;
var BAR_GAP = 50; // размер отступа
var BAR_WIDTH = 50; // ширина колонки
var TEXT_WIDTH = 40; // ширина текста
var MAX_BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    renderHistogram(ctx, players[i], times[i], maxTime, i);
  }
};

var getRandomColor = function () {
  var saturation = Math.floor(Math.random() * 101);

  return 'hsl(240, ' + saturation + '%, 50%)';
};

var renderHistogram = function (ctx, player, time, maxTime, index) {

  var barHeight = Math.round(MAX_BAR_HEIGHT * time / maxTime);
  var x = 140 + BAR_WIDTH * index * 2;
  var y = 90 + MAX_BAR_HEIGHT - barHeight;

  ctx.fillStyle = player === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
  ctx.fillRect(x, y, BAR_WIDTH, barHeight);
  ctx.fillStyle = '#000';
  ctx.fillText(Math.round(time), x, y - GAP);
  ctx.fillText(player, x, 100 + MAX_BAR_HEIGHT + FONT_GAP);
}
