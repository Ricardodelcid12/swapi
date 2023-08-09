import { useEffect, useState } from "react";
import { savePeople } from "../useCases/SavePeople";
import { getSwapiPeople } from "../useCases/GetSwapiPeople";
import { People } from "../models/People";
import { io } from "socket.io-client";
import Logo from "../images/logo.png";
import background from "../images/background.jpeg";
import PeopleTable from "./PeopleTable";
import { toast } from "react-toastify";

export interface SwapiResponse {
  count: number;
  next: string;
  previous: null;
  results: People[] | never[];
}

const socket = io("http://localhost:8080/");

export default function Home() {
  const [people, setPeople] = useState<People[] | never[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSwapiPeople().then((data) => {
      if (data.results.length > 0) {
        setPeople(data.results);
        savePeople(data.results).then(() => {
          socket.on("NewPeople", (msg) => {
            toast.success(msg, {
              theme: "dark",
            });
          });
        });
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                src={Logo}
                alt={"Swapi"}
                width={140}
                height={120}
                className="mx-8 mt-4"
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <h1 className="text-sm font-semibold leading-6 text-white">
              People
            </h1>
          </div>
        </nav>
      </header>

      <div className="h-full isolate overflow-hidden pt-14">
        <img
          src={background}
          className="absolute inset-0 -z-10 h-full w-full object-fill"
        />
      </div>
      {loading ? (
        <div className="flex h-screen w-full justify-center items-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <PeopleTable people={people} />
      )}
    </div>
  );
}
