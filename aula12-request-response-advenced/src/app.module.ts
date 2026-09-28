import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
  import { SegurançaController } from './seguranca.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [ ],
  controllers: [AppController, SegurançaController],
  providers: [AppService],
})
export class AppModule {}
