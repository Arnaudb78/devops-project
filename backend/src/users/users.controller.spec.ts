import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = ['test'];
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(async () => result as any);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const result = { id: 1, name: 'Test User' };
      jest
        .spyOn(service, 'findOne')
        .mockImplementation(async () => result as any);

      expect(await controller.findOne(1)).toBe(result);
    });

    it('should throw NotFoundException if user does not exist', async () => {
      jest
        .spyOn(service, 'findOne')
        .mockRejectedValue(new Error('User with ID 99 not found'));

      await expect(controller.findOne(99)).rejects.toThrow(
        'User with ID 99 not found',
      );
    });
  });

  describe('create', () => {
    it('should throw an error if user with same email exists', async () => {
      const dto = {
        name: 'Existing User',
        email: 'existing@example.com',
        password: 'secret',
      };

      jest
        .spyOn(service, 'create')
        .mockRejectedValue(
          new Error('Un utilisateur avec cet email existe déjà'),
        );

      await expect(controller.create(dto)).rejects.toThrow(
        'Un utilisateur avec cet email existe déjà',
      );
    });
  });

  describe('update', () => {
    it('should throw an error if update DTO is empty', async () => {
      jest
        .spyOn(service, 'update')
        .mockRejectedValue(
          new Error('Aucune donnée fournie pour la mise à jour'),
        );

      await expect(controller.update(1, {})).rejects.toThrow(
        'Aucune donnée fournie pour la mise à jour',
      );
    });

    it('should rethrow unknown errors on update', async () => {
      jest
        .spyOn(service, 'update')
        .mockRejectedValue(new Error('Unexpected error'));

      await expect(controller.update(1, { name: 'Something' })).rejects.toThrow(
        'Unexpected error',
      );
    });
  });

  describe('remove', () => {
    it('should throw NotFoundException if user does not exist', async () => {
      jest
        .spyOn(service, 'remove')
        .mockRejectedValue(new Error('User with ID 42 not found'));

      await expect(controller.remove(42)).rejects.toThrow(
        'User with ID 42 not found',
      );
    });
  });
});
