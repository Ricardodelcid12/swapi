import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { People } from '../models/People'

export interface PeopleTableProps {
  people: People[]
}

export const peopleTableColumns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'height',
    headerName: 'Height',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'mass',
    headerName: 'Mass',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'hair_color',
    headerName: 'hair_color',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'skin_color',
    headerName: 'Skin Color',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'eye_color',
    headerName: 'Eye Color',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'birth_year',
    headerName: 'Birth Year',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'gender',
    headerName: 'Gender',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'homeworld',
    headerName: 'Homeworld',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'created',
    headerName: 'Created',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'edited',
    headerName: 'Edited',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  },
  {
    field: 'url',
    headerName: 'Url',
    align: 'center',
    headerAlign: 'center',
    flex: 1
  }
]

export const createPeopleTableRows = ({
  people
}: PeopleTableProps): GridRowsProp => {
  const rows = people.map((row: People) => ({
    name: row.name,
    height: row.height,
    mass: row.mass,
    hair_color: row.hair_color,
    skin_color: row.skin_color,
    eye_color: row.eye_color,
    birth_year: row.birth_year,
    gender: row.gender,
    homeworld: row.homeworld,
    created: row.created,
    edited: row.edited,
    url: row.url
  }))

  return rows
}
