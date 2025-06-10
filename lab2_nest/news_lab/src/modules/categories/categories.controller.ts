import { Controller, Get, Body, Param, NotFoundException } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

 @Get()
  getAll() {
    return this.categoriesService.findAll();
  }

  @Get(':slug')
  getOne(@Param('slug') slug: string) {
    const category = this.categoriesService.findOne(slug);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }
}
