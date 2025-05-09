import { Test, TestingModule } from '@nestjs/testing';
import { DriversController } from './drivers.controller';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { PrismaService } from '../prisma/prisma.service';

describe('DriversController', () => {
  let controller: DriversController;
  let service: DriversService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriversController],
      providers: [
        DriversService,
        {
          provide: PrismaService,
          useValue: {
            driver: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    controller = module.get<DriversController>(DriversController);
    service = module.get<DriversService>(DriversService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create with the provided DTO', async () => {
      const createDriverDto: CreateDriverDto = {
        name: 'John Doe',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
      };
      const expectedResult = {
        id: 1,
        name: 'John Doe',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createDriverDto)).toBe(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createDriverDto);
    });

    it('should throw an error if driver with same email exists', async () => {
      const createDriverDto: CreateDriverDto = {
        name: 'John Duplicate',
        licenseNumber: 'XYZ123',
        phoneNumber: '987654321',
        email: 'john.doe@example.com',
      };
    
      jest.spyOn(service, 'create').mockRejectedValue(new Error('Un pilote avec cet email existe déjà'));
    
      await expect(controller.create(createDriverDto)).rejects.toThrow('Un pilote avec cet email existe déjà');
    });    
  });

  describe('findAll', () => {
    it('should call service.findAll', async () => {
      const expectedResult = [
        {
          id: 1,
          name: 'John Doe',
          licenseNumber: 'ABC123',
          phoneNumber: '123456789',
          email: 'john.doe@example.com',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);

      expect(await controller.findAll()).toBe(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should call service.findOne with the provided id', async () => {
      const expectedResult = {
        id: 1,
        name: 'John Doe',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);

      expect(await controller.findOne(1)).toBe(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should call service.update with the provided id and DTO', async () => {
      const updateDriverDto: UpdateDriverDto = {
        name: 'John Updated',
      };
      const expectedResult = {
        id: 1,
        name: 'John Updated',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(1, updateDriverDto)).toBe(expectedResult);
      expect(service.update).toHaveBeenCalledWith(1, updateDriverDto);
    });

    it('should throw an error if update DTO is empty', async () => {
      jest.spyOn(service, 'update').mockRejectedValue(new Error('Aucune donnée fournie pour la mise à jour'));
    
      await expect(controller.update(1, {})).rejects.toThrow('Aucune donnée fournie pour la mise à jour');
    });
  });

  describe('remove', () => {
    it('should call service.remove with the provided id', async () => {
      const expectedResult = {
        id: 1,
        name: 'John Doe',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'remove').mockResolvedValue(expectedResult as any);

      expect(await controller.remove(1)).toBe(expectedResult);
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });

  describe('findByName', () => {
    it('should call service.findByName with the provided name', async () => {
      const name = 'John';
      const expectedResult = [
        {
          id: 1,
          name: 'John Doe',
          licenseNumber: 'ABC123',
          phoneNumber: '123456789',
          email: 'john.doe@example.com',
          active: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
  
      jest.spyOn(service, 'findByName').mockResolvedValue(expectedResult as any);
  
      expect(await controller.findByName(name)).toBe(expectedResult);
      expect(service.findByName).toHaveBeenCalledWith(name);
    });

    it('should throw an error if name is too short', async () => {
      jest.spyOn(service, 'findByName').mockRejectedValue(new Error('Le nom à rechercher doit contenir au moins 2 caractères'));
    
      await expect(controller.findByName('')).rejects.toThrow('Le nom à rechercher doit contenir au moins 2 caractères');
    });    
  });  
});
