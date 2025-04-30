import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { PrometheusModule } from './prometheus/prometheus.module';
import { MetricsController } from './metrics.controller';
import { PrometheusService } from './prometheus/prometheus.service';
@Module({
  imports: [TerminusModule, PrometheusModule],
  controllers: [MetricsController],
  providers: [PrometheusService],
})
export class MetricsModule {}
