import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAll(): string[];
    getOne(slug: string): {
        slug: string;
        news: string[];
    };
}
