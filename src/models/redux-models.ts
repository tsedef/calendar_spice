//creating UserProfile OBJECT. similar to type but 
// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it

import { EventApi } from "@fullcalendar/core";

// a second time.
export interface UserProfile {
    name: string;
    email: string;
    interests: string[];
}

export interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}