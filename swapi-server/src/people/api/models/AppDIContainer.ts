import { Container } from "inversify";
import PeopleController from "../controllers/PeopleController";
import { GetPeopleHandler } from "../../application/useCases/GetPeople";
import PeopleDbService from "../../infrastructure/PeopleDbService";
import PeopleRepository from "../../infrastructure/repositories/PeopleRepository";
import { SavePeopleHandler } from "../../application/useCases/SavePeople";

//Create a new Inversify Dependency Container
export const AppDIContainer = new Container({
  defaultScope: "Singleton",
});

//Bind services to the Inversify Dependency Container
AppDIContainer.bind(PeopleDbService).toSelf();
AppDIContainer.bind(PeopleRepository).toSelf();
AppDIContainer.bind(GetPeopleHandler).toSelf();
AppDIContainer.bind(SavePeopleHandler).toSelf();
AppDIContainer.bind(PeopleController).toSelf();