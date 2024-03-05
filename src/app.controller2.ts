import { Controller, Get, Req, Param, Query, Body, Ip, HostParam, Session, Res, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/api/v2')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  getHello(@Query('version') version): any {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
