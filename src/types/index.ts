export interface MenuItem {
  id: string;
  name: string;
  description: string;
  selected: boolean;
}

export interface EventDetails {
  location: string;
  venueImage: string;
  date: string;
  time: string;
  menu: MenuItem[];
}

export interface Quote {
  text: string;
  author: string;
}