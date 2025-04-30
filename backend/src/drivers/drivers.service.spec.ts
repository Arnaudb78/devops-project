import { Test, TestingModule } from '@nestjs/testing';
import { DriversService } from './drivers.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

describe('DriversService', () => {
  let service: DriversService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    driver: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DriversService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<DriversService>(DriversService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a driver', async () => {
      const createDriverDto: CreateDriverDto = {
        name: 'John Doe',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
      };
      const expectedDriver = {
        id: 1,
        ...createDriverDto,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.driver.create.mockResolvedValue(expectedDriver);

      const result = await service.create(createDriverDto);
      expect(result).toEqual(expectedDriver);
      expect(mockPrismaService.driver.create).toHaveBeenCalledWith({
        data: createDriverDto,
      });
    });
    it('should throw an error if driver with same email exists', async () => {
      const createDriverDto: CreateDriverDto = {
        name: 'John Duplicate',
        licenseNumber: 'XYZ123',
        phoneNumber: '987654321',
        email: 'john.doe@example.com',
      };
    
      mockPrismaService.driver.findFirst = jest.fn().mockResolvedValue({ id: 1 });
    
      await expect(service.create(createDriverDto)).rejects.toThrow('Un pilote avec cet email existe déjà');
    });
    
  });

  describe('findAll', () => {
    it('should return an array of drivers', async () => {
      const expectedDrivers = [
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

      mockPrismaService.driver.findMany.mockResolvedValue(expectedDrivers);

      const result = await service.findAll();
      expect(result).toEqual(expectedDrivers);
      expect(mockPrismaService.driver.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a driver when it exists', async () => {
      const expectedDriver = {
        id: 1,
        name: 'John Doe',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.driver.findUnique.mockResolvedValue(expectedDriver);

      const result = await service.findOne(1);
      expect(result).toEqual(expectedDriver);
      expect(mockPrismaService.driver.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw NotFoundException when driver does not exist', async () => {
      mockPrismaService.driver.findUnique.mockResolvedValue(null);

      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
      expect(mockPrismaService.driver.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('update', () => {
    it('should update a driver when it exists', async () => {
      const updateDriverDto: UpdateDriverDto = {
        name: 'John Updated',
      };
      const expectedDriver = {
        id: 1,
        name: 'John Updated',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.driver.update.mockResolvedValue(expectedDriver);

      const result = await service.update(1, updateDriverDto);
      expect(result).toEqual(expectedDriver);
      expect(mockPrismaService.driver.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDriverDto,
      });
    });

    it('should throw an error if update DTO is empty', async () => {
      await expect(service.update(1, {})).rejects.toThrow('Aucune donnée fournie pour la mise à jour');
    });
  });

  describe('remove', () => {
    it('should delete a driver when it exists', async () => {
      const expectedDriver = {
        id: 1,
        name: 'John Doe',
        licenseNumber: 'ABC123',
        phoneNumber: '123456789',
        email: 'john.doe@example.com',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockPrismaService.driver.delete.mockResolvedValue(expectedDriver);

      const result = await service.remove(1);
      expect(result).toEqual(expectedDriver);
      expect(mockPrismaService.driver.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('findByName', () => {
    it('should return drivers matching the name', async () => {
      const mockDrivers = [
        { id: 1, name: 'Lewis Hamilton' },
        { id: 2, name: 'George Russell' },
      ];
  
      prismaService.driver.findMany = jest.fn().mockResolvedValue(mockDrivers);
  
      const result = await service.findByName('hamilton');
  
      expect(result).toEqual(mockDrivers);
      expect(prismaService.driver.findMany).toHaveBeenCalledWith({
        where: { name: { contains: 'hamilton', mode: 'insensitive' } },
      });
    });
  
    it('should throw NotFoundException if no drivers match the name', async () => {
      prismaService.driver.findMany = jest.fn().mockResolvedValue([]);
  
      await expect(service.findByName('Unknown')).rejects.toThrow(NotFoundException);
    });

    it('should throw an error if name is empty or too short', async () => {
      await expect(service.findByName('')).rejects.toThrow('Le nom à rechercher doit contenir au moins 2 caractères');
      await expect(service.findByName('a')).rejects.toThrow('Le nom à rechercher doit contenir au moins 2 caractères');
    });
  });
});
