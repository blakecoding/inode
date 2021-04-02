import { NextFunction, Router } from "express";
import Controller from "interfaces/controller.interface";

class HomeController implements Controller {
  public path = "/";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {}

  private home = async (
    request: Request,
    res: Response,
    next: NextFunction
  ) => {
    // res.s
  };
}
