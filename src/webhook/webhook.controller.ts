import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookRequestBody } from '@line/bot-sdk';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  @HttpCode(200)
  async handleMessage(@Body() body: any) {
    console.log('Request received:', body);
    try {
      await this.webhookService.message(body);
    } catch (error) {
      console.error('Error handling message:', error);
    }
  }
}
