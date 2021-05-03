import { IHelloWorldRepository } from "../IHelloWorldRepository";

class HelloWorldRepository implements IHelloWorldRepository {
  sayHello(): string {
    return "Hello World from Repository injected in the Service";
  }
}

export { HelloWorldRepository };