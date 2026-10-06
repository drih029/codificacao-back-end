import { Controller, Get } from '@nestjs/common';

@Controller('Status')
export class AppController {
  @Get()
  getPublic(){
    return {
      mensagem: 'Rota Publica acessada com sucesso!',
      data:new Date(),
    }

  }
  @Get('admin')
  getAdmin(){
    return {
      mensagem: 'Bem-vindo ao Painel Admnistrativo!',
      data: new Date(),
    }
  }
  @Get('secret')
  getSecret(){
    return{
      mensagem: 'Bem-vindo a rota secreta!',
      data: new Date(),
    }
  }
}
