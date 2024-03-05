import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AppController as AppController2 } from './app.controller2';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AppController2],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppService).forRoutes('api');
  }
}
