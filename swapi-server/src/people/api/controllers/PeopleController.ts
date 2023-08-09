import { BaseHttpController, controller, httpGet, httpPost } from "inversify-express-utils";
import { Request, Response } from "express";
import {
  GetPeopleQuery,
  GetPeopleHandler,
} from "../../application/useCases/GetPeople";
import {
  SavePeopleCommand,
  SavePeopleHandler,
} from "../../application/useCases/SavePeople";

/**
 * This class is the client entry point access to interact with people use cases
 */
@controller("/people")
export default class PeopleController extends BaseHttpController {
  constructor(
    private getPeopleHandler: GetPeopleHandler,
    private savePeopleHandler: SavePeopleHandler
  ) {
    super();
  }

  /**
   * This async function is the client entry point access call to get people from database logic.
   * @param req express Request interface
   * @param res express Response interface
   */
  @httpGet("/")
  async getPeople(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.getPeopleHandler.handle(new GetPeopleQuery());

      res.status(201).json({
        message: "Swapi people ok.",
        data,
      });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong..." });
    }
  }

  /**
   * This async function is the client entry point access call to save people in database logic.
   * @param req express Request interface
   * @param res express Response interface
   */
  @httpPost("/save")
  async savePeople(req: Request, res: Response): Promise<void> {
    try {
      await this.savePeopleHandler.handle(new SavePeopleCommand(req.body));

      res.status(201).json({ message: "Swapi people saved successfully." });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong..." });
    }
  }
}
