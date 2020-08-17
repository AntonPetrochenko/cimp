export class RegisterResponse {
    constructor(public status: "success" | "failure", public payload?: {message: string}) {}
}