import { LoginRequest } from "@/types/LoginTypes";

export async function login(LoginRequest: LoginRequest) : Promise<number | undefined> {

    //simular operação assíncrona, como uma chamada a um backend
    await new Promise(resolve => setTimeout(resolve, 3000));

    if (LoginRequest.email === 'admin@gmail.com' && LoginRequest.password === 'admin') {
        return 1; // Simula admin
    }
    else if (LoginRequest.email === 'client@gmail.com' && LoginRequest.password === 'client') {
        return 2; // Simula cliente
    }

    return undefined; // Credenciais inválidas

}