import { Injectable } from '@nestjs/common';
import { Registry, collectDefaultMetrics } from 'prom-client';

@Injectable()
export class PrometheusService {
  private readonly registry: Registry;

  constructor() {
    this.registry = new Registry();
    collectDefaultMetrics({ register: this.registry });
  }

  getMetrics(): Promise<string> {
    return this.registry.metrics();
  }

  getRegistry(): Registry {
    return this.registry;
  }
}
