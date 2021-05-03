import { container } from "tsyringe";

import { HelloWorldRepository } from "../repositories/implementations/HelloWorldRepository";
import { IHelloWorldRepository } from "../repositories/IHelloWorldRepository";

container.registerSingleton<IHelloWorldRepository>(
  "HelloWorldRepositoryContainerReference",
  HelloWorldRepository
);