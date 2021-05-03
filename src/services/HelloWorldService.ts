import { inject, injectable } from "tsyringe";
import { IHelloWorldRepository } from "../repositories/IHelloWorldRepository";

@injectable()
class HelloWorldService {

  constructor(
    @inject("HelloWorldRepositoryContainerReference")
    private helloWorldRepository: IHelloWorldRepository
  ) {}

  execute(): string {
    const helloWorldString = this.helloWorldRepository.sayHello();
    
    return helloWorldString;
  }
}

export { HelloWorldService };