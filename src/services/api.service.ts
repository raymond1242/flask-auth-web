const API_URL = import.meta.env.VITE_API_URL as string;

interface LoginRequest {
    email: string;
    password: string;
}

interface SignupRequest {
    name: string;
    email: string;
    password: string;
}

export const ApiService = {
    async signup(requestData: SignupRequest): Promise<any> {
        let formData = new FormData();
        Object.entries(requestData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        let requestOptions = {
            method: 'POST',
            body: formData,
        };

        return fetch(`${API_URL}/signup`, requestOptions)
        .then(response => response.json())
    },

    async login(requestData: LoginRequest): Promise<any> {
        let formData = new FormData();
        Object.entries(requestData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        let requestOptions = {
            method: 'POST',
            body: formData,
        };

        return fetch(`${API_URL}/login`, requestOptions)
        .then(response => response.json())
    }
}