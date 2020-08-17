export class AuthResponse {
    payload: {
        token: string;
        username: string;
    }
    status: string;
    constructor(status: "success" | "failure", token?: string, username?: string) {
        if (status == "success") {
            this.payload = {token: token, username: username}
        }
        this.status = status
    }
}