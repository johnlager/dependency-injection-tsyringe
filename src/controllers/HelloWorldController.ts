import { Request, Response } from "express";
import { container } from "tsyringe";
import { HelloWorldService } from "../services/HelloWorldService";

class HelloWorldController {
  constructor() {}

  async handle(request: Request, response: Response): Promise<Response> {
    const helloWorldService = container.resolve(HelloWorldService);
    const value = await helloWorldService.execute();

    return response.json(value);
  }
}

export { HelloWorldController };