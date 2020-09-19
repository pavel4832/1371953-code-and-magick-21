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

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  return arr.reduce(function (accumulator, it) {
    return Math.max(accumulator, it);
  }, -Infinity);
};

let getFillColor = function (element) {
  const saturation = Math.floor(Math.random() * (100 - 50)) + 50;
  return (element === `Вы`) ? `rgba(255, 0, 0, 1)` : `hsl(240, ` + saturation + `%, 50%)`;
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

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillStyle = `#000`;
    ctx.fillText(
        players[i],
        CLOUD_X + TEXT_GAP * 2 + (BAR_WEIGHT + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - CLOUD_GAP * 3
    );

    ctx.fillStyle = getFillColor(players[i]);
    const barHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillRect(
        CLOUD_X + TEXT_GAP * 2 + (BAR_WEIGHT + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - CLOUD_GAP * 2 - FONT_GAP - barHeight,
        BAR_WEIGHT,
        barHeight
    );

    ctx.fillStyle = `#000`;
    const time = Math.floor(parseInt(times[i], 10));
    ctx.fillText(
        String(time),
        CLOUD_X + TEXT_GAP * 2 + (BAR_WEIGHT + BAR_GAP) * i,
        CLOUD_Y + CLOUD_HEIGHT - CLOUD_GAP * 2 - FONT_GAP * 2 - barHeight
    );
  }
};
