interface Threshold {
  getThreshold (): number;
}

export class ColdThresholdSource implements Threshold {
  getThreshold (): number {
    return -10;
  }
}
