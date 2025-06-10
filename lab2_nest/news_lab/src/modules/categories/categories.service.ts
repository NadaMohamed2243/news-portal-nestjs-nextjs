import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {

  private categories = [
    { slug: 'local', news: ['Local news 1', 'Local news 2'] },
    { slug: 'national', news: ['National news 1', 'National news 2'] },
    { slug: 'international', news: ['International news 1', 'International news 2'] },
    { slug: 'business', news: ['Business news 1', 'Business news 2'] },
    { slug: 'sports', news: ['Sports news 1', 'Sports news 2'] },
    { slug: 'weather', news: ['Weather news 1', 'Weather news 2'] },
    { slug: 'entertainment', news: ['Entertainment news 1', 'Entertainment news 2'] },
  ];

  findAll() {
    return this.categories.map(cat => cat.slug);
  }

  findOne(slug: string) {
    return this.categories.find(cat => cat.slug === slug);
  }
}
