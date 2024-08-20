import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientConfig, messagingApi } from '@line/bot-sdk';

@Injectable()
export class LineConfigService {
  private readonly clientConfig: ClientConfig;

  constructor(private readonly configService: ConfigService) {
    console.log(this.configService.get('CHANNEL_ACCESS_TOKEN'));
    console.log('lllllllll');
    this.clientConfig = {
      channelAccessToken: configService.get<string>('CHANNEL_ACCESS_TOKEN'),
      channelSecret: this.configService.get<string>('CHANNEL_SECRET'),
    };
  }

  createLinebotClient() {
    return new messagingApi.MessagingApiClient(this.clientConfig);
  }

  createLinebotBlobClient() {
    return new messagingApi.MessagingApiBlobClient(this.clientConfig);
  }
}
