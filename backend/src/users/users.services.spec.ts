import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

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
  });
});
