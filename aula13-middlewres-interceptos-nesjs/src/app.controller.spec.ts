import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getPublic', () => {
    it('should return the public route message', () => {
      const response = appController.getPublic();

      expect(response.message).toBe('Rota Publica acessada com sucesso!');
      expect(response.data).toBeInstanceOf(Date);
    });
  });

  describe('getAdmin', () => {
    it('should return the admin route message', () => {
      const response = appController.getAdmin();

      expect(response.message).toBe('Bem-vindo ao Painel Admnistrativo!');
      expect(response.data).toBeInstanceOf(Date);
    });
  });
});
