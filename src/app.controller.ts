import { Controller, Get, Req, Param, Query, Body, Ip, HostParam, Session, Res, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get/:id')
  getHello(@Param() p: Request, @Query() param:any): string {
    return this.appService.getHello();
  }
}
