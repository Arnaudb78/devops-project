import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

describe('UsersService', () => {
  let service: UsersService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const mockUsers = [{ id: 1, name: 'Test User' }];
      jest
        .spyOn(prismaService.user, 'findMany')
        .mockResolvedValue(mockUsers as any);

      expect(await service.findAll()).toBe(mockUsers);
    });
  });

  describe('findOne', () => {
    it('should return a single user', async () => {
      const mockUser = { id: 1, name: 'Test User' };
      jest
        .spyOn(prismaService.user, 'findUnique')
        .mockResolvedValue(mockUser as any);

      expect(await service.findOne(1)).toBe(mockUser);
    });

    it('should throw NotFoundException if user does not exist', async () => {
      jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);
      await expect(service.findOne(1)).rejects.toThrow(
        'User with ID 1 not found',
      );
    });
  });

  describe('create', () => {
    it('should throw an error if email already exists', async () => {
      const newUser = {
        name: 'Jane',
        email: 'existing@example.com',
        password: 'securepass',
      };

      jest.spyOn(prismaService.user, 'findFirst').mockResolvedValue({
        id: 2,
        email: 'existing@example.com',
        name: 'Existing User',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await expect(service.create(newUser)).rejects.toThrow(
        'Un utilisateur avec cet email existe déjà',
      );
    });
  });

  describe('update', () => {
    it('should throw an error if update data is empty', async () => {
      await expect(service.update(1, {})).rejects.toThrow(
        'Aucune donnée fournie pour la mise à jour',
      );
    });

    it('should throw NotFoundException if user does not exist on update', async () => {
      const prismaError = {
        code: 'P2025',
        name: 'PrismaClientKnownRequestError',
      } as any;
      jest.spyOn(prismaService.user, 'update').mockRejectedValue(prismaError);
      await expect(
        service.update(99, { name: 'Failing Update' }),
      ).rejects.toThrow('User with ID 99 not found');
    });

    it('should rethrow unknown errors on update', async () => {
      const unexpectedError = new Error('Unexpected error');
      jest
        .spyOn(prismaService.user, 'update')
        .mockRejectedValue(unexpectedError);

      await expect(service.update(1, { name: 'Test' })).rejects.toThrow(
        'Unexpected error',
      );
    });
  });

  describe('remove', () => {
    it('should throw NotFoundException if user does not exist on delete', async () => {
      const prismaError = {
        code: 'P2025',
        name: 'PrismaClientKnownRequestError',
      } as any;
      jest.spyOn(prismaService.user, 'delete').mockRejectedValue(prismaError);
      await expect(service.remove(123)).rejects.toThrow(
        'User with ID 123 not found',
      );
    });
  });
});
