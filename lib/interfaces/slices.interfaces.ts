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
  title: string;
  description: string;
  content: string;
  picture: null;
  image_url: null;
  created_at: string;
  updated_at: string;
  city: City;
  publication_type: PublicationType;
  tags: Tag[];
}

export interface City {
  id: string;
  name: string;
  state: State;
}

export interface State {
  id: string;
  name: string;
  Country: Tag;
}

export interface Tag {
  id: string;
  name: string;
}

export interface PublicationType {
  id: string;
  name: string;
  description: string;
}

export interface EventInitial {
  events: Events[] | null;
}
