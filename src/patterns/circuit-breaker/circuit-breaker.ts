type Command<T> = () => Promise<T>;

enum State {
  Open,
  HalfOpen,
  Closed,
}

class Bucket {
  constructor(public success = 0, public error = 0, public timeout = 0, public shortCircuit = 0) {}
}

class OpenError extends Error {
  public name = 'CircuitOpenError';
  constructor(message = 'Circuit is open, unable to process') {
    super(message);
  }
}

class TimeoutError extends Error {
  public name = 'CircuitTimeoutError';
  constructor(message = 'Circuit is , unable to process') {
    super(message);
  }
}

type Default<T> = T | 'default';

class Config {
  timeout: Default<number> = 'default';
  windowDuration: Default<number> = 'default';
  bucketCount: Default<number> = 'default';
}

export class CircuitBreaker {
  // Config
  private timeout: number;
  private windowDuration: number;
  private bucketCount: number;

  // State
  private buckets: Bucket[] = [];
  private state = State.Closed;

  constructor(config: Config) {
    this.timeout = this.setValue(config.timeout, 5_000);
    this.windowDuration = this.setValue(config.windowDuration, 10_000);
    this.bucketCount = this.setValue(config.bucketCount, 10);

    this.buckets = [new Bucket()];
  }

  public async run<T>(command: Command<T>): Promise<T> | never {
    if (this.state === State.Open) {
      throw new OpenError();
    }
    return this.runCommand(command);
  }

  private async runCommand<T>(command: Command<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      command()
        .then((result) => {
          resolve(result);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  private setValue<K>(value: Default<K>, defaultValue: K): K {
    return value === 'default' ? defaultValue : value;
  }
}
