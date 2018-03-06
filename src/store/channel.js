import Channel from 'async-csp';

export const notificationChannel = new Channel()
export const errorChannel = new Channel()
export const warningChannel = new Channel()
export const debugChannel = new Channel()
export const logChannel = new Channel()

export const requestChannel = new Channel();

export const mouseMoveChannel = new Channel();

export function getHeartBeat(delay) {
  const heartBeat = new Channel();
  let counter = 0;
  return heartBeat.produce(async (delay) => {
    await timeout(delay);
    return ++counter;
  });
}