import { ISpecificationsRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationsRepository) {}
    execute({ name, description }: IRequest): void {
        const specificationNameAlreadyExists =
            this.specificationRepository.findByName(name);
        if (specificationNameAlreadyExists) {
            throw new Error("Specifications already Exists");
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationService };
