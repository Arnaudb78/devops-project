import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) {}

  async create(createDriverDto: CreateDriverDto) {
    const existingDriver = await this.prisma.driver.findFirst({
      where: {
        email: createDriverDto.email,
      },
    });
  
    if (existingDriver) {
      throw new Error('Un pilote avec cet email existe déjà');
    }
  
    return this.prisma.driver.create({
      data: createDriverDto,
    });
  }

  async findAll() {
    return this.prisma.driver.findMany();
  }

  async findOne(id: number) {
    const driver = await this.prisma.driver.findUnique({
      where: { id },
    });

    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }

    return driver;
  }

  async update(id: number, updateDriverDto: UpdateDriverDto) {
    if (Object.keys(updateDriverDto).length === 0) {
      throw new Error('Aucune donnée fournie pour la mise à jour');
    }    
    try {
      return await this.prisma.driver.update({
        where: { id },
        data: updateDriverDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Driver with ID ${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.driver.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Driver with ID ${id} not found`);
      }
      throw error;
    }
  }

  async findByName(name: string) {
    if (!name || name.trim().length < 2) {
      throw new Error('Le nom à rechercher doit contenir au moins 2 caractères');
    }

    const drivers = await this.prisma.driver.findMany({
      where: { name: { contains: name, mode: 'insensitive' } },
    });
    if (!drivers.length) {
      throw new NotFoundException(`Aucun pilote trouvé avec le nom : ${name}`);
    }
    
    return drivers;
  }
  
}
