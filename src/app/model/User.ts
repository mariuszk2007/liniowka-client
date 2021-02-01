export class User {
    userId;
    username: string;

}

export interface UserResponse {
    Users: Array<User>;
}