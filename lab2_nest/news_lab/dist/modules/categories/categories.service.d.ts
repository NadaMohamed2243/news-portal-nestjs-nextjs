export declare class CategoriesService {
    private categories;
    findAll(): string[];
    findOne(slug: string): {
        slug: string;
        news: string[];
    } | undefined;
}
