import { Controller, Get, Res } from '@nestjs/common';
import { PrometheusService } from './prometheus/prometheus.service';
import { Response } from 'express';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly prometheusService: PrometheusService) {}

  @Get()
  async getMetrics(@Res() response: Response) {
    response.set(
      'Content-Type',
      this.prometheusService.getRegistry().contentType,
    );
    response.end(await this.prometheusService.getMetrics());
  }
}
