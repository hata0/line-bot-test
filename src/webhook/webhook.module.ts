import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { LineConfigService } from 'src/line-config/line-config.service';
import { LineConfigService } from './line-config/line-config.service';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService, LineConfigService],
})
export class WebhookModule {}
