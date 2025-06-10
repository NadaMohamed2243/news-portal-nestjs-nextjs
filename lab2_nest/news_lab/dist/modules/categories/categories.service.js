"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
let CategoriesService = class CategoriesService {
    categories = [
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
    findOne(slug) {
        return this.categories.find(cat => cat.slug === slug);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
//# sourceMappingURL=categories.service.js.map