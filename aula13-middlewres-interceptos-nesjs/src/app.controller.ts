import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller('Status')
export class AppController {
  @Get()
  getPublic(){
    return {
      message: 'Rota Publica acessada com sucesso!',
      data:new Date(),
    }

  }
  @Get('/admin')
  getAdmin(){
    return {
      message: 'Bem-vindo ao Painel Admnistrativo!',
      data: new Date(),
    }

  }
}
