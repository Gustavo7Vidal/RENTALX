import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
//Definir o tipo de retorno

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute({ name, description }: IRequest): void {
        const categoryAlreadyExist = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExist) {
            throw new Error("Category already existis!");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
