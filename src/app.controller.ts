import { Controller, Get, Res } from '@nestjs/common';
import { interval } from 'rxjs';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("greeting")
  
  async getHello() {
    return await this.appService.getHello();
    
  }
  @Get("publish-event")
  async publishEvent() {
    this.appService.publishEvent();
  }

}
