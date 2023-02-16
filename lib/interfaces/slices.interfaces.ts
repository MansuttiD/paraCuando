//Type MyUser

export interface UserState {
  results: Results;
}

export interface Results {
  id: string;
  email: string;
  username: string;
  profile: Profile[];
}

export interface Profile {
  id: string;
  image_url: string;
  code_phone: string;
  phone: string;
  role: Role;
}

export interface Role {
  id: string;
  name: string;
}

export interface User {
  user: null | UserState;
}

//Type Events

export interface Events {
  id: string;
  profile_id: string;
  publication_type_id: string;
  title: string;
  description: string;
  content: string;
  picture: string;
  city_id: string;
  image_url: string;
  created_at: Date;
  updated_at: Date;
  votes_count: string;
  city: City;
  publication_type: PublicationType;
  tags: Tag[];
}

export interface City {
  id: string;
  name: CityName;
  state: State;
}

export enum CityName {
  Culiacan = 'Culiacan',
}

export interface State {
  id: string;
  name: StateName;
  Country: Tag;
}

export interface Tag {
  id: string;
  name: string;
}

export enum StateName {
  Sinaloa = 'Sinaloa',
}

export interface PublicationType {
  id: string;
  name: PublicationTypeName;
  description: string;
}

export enum Description {
  Concert = 'concert',
  MarcasYTiendas = 'Marcas y tiendas',
  Torneos = 'Torneos',
}

export enum PublicationTypeName {
  ArtistasYConciertos = 'Artistas y conciertos',
  MarcasYTiendas = 'Marcas y tiendas',
  Torneos = 'Torneos',
}
