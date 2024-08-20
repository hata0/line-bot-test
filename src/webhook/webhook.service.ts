import { Injectable } from '@nestjs/common';
import { WebhookRequestBody } from '@line/bot-sdk';
import { LineConfigService } from './line-config/line-config.service';

@Injectable()
export class WebhookService {
  constructor(private readonly lineConfig: LineConfigService) {}

  async message(req: any): Promise<void> {
    const client = this.lineConfig.createLinebotClient();
    const events = req.events;
    await Promise.all(
      events.map(async (event) => {
        if (event.type === 'message' && event.message.type === 'text') {
          await client.replyMessage({
            replyToken: event.replyToken,
            messages: [
              {
                type: 'text',
                text: 'kurakke',
              },
            ],
          });
        }
      }),
    );
  }
}
