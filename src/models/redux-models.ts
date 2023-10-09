//creating UserProfile OBJECT. similar to type but 
// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it
// a second time.
export interface UserProfile {
    name: string;
    email: string;
    interests: string[];
}