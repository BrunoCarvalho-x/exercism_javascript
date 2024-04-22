export class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArgumentError';
  }
}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage === 100) {
    throw new ArgumentError('Message');
  }
}

export function reportOverheating(temperature) {
  if (temperature == null) {
    throw new ArgumentError('Temperatura Nula');
  }

  if (temperature > 500) {
    throw new OverheatingError(501);
  }
}

export function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature > 600) {
        actions.shutdown();
      } else {
        actions.alertOverheating();
      }
    } else {
      throw error;
    }
  }
}
