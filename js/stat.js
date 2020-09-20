'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;
const TEXT_GAP = 20;
const FONT_GAP = 16;
const BAR_GAP = 50;
const MAX_BAR_HEIGHT = 150;
const BAR_WEIGHT = 40;
const STAT_POSITION_X = CLOUD_X + TEXT_GAP * 2;
const STAT_POSITION_Y = CLOUD_Y + CLOUD_HEIGHT;
const STAT_X_GAP = BAR_WEIGHT + BAR_GAP;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  return arr.reduce(function (accumulator, it) {
    return Math.max(accumulator, it);
  }, -Infinity);
};

const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getFillColor = function (element) {
  return (element === `Вы`) ? `rgba(255, 0, 0, 1)` : `hsl(240, ` + getRandomNumber(20, 100) + `%, 50%)`;
};

const drawBarStat = function (ctx, players, times) {
  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    const barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    const time = Math.floor(parseInt(times[i], 10));

    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        STAT_POSITION_X + STAT_X_GAP * i,
        STAT_POSITION_Y - CLOUD_GAP * 3
    );

    ctx.fillStyle = getFillColor(players[i]);
    ctx.fillRect(
        STAT_POSITION_X + STAT_X_GAP * i,
        STAT_POSITION_Y - CLOUD_GAP * 2 - FONT_GAP - barHeight,
        BAR_WEIGHT,
        barHeight
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(
        String(time),
        STAT_POSITION_X + STAT_X_GAP * i,
        STAT_POSITION_Y - CLOUD_GAP * 2 - FONT_GAP * 2 - barHeight
    );
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + CLOUD_GAP,
      CLOUD_Y + CLOUD_GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + TEXT_GAP,
      CLOUD_Y + CLOUD_GAP + FONT_GAP
  );
  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + TEXT_GAP,
      CLOUD_Y + CLOUD_GAP + FONT_GAP * 2
  );

  drawBarStat(ctx, players, times);
};
