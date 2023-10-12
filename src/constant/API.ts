export const API = () => {
    const BASE_URL = 'https://354c-2001-448a-4007-236d-3cba-1732-5a2d-bb9b.ngrok-free.app/api'

    type HeadersProps = {
        'Content-Type': string,
        'Authorization': string
    }

    type OptionFetchWithTokenProps = {
        method: string,
        headers: HeadersProps,
        body: BodyInit_
    }

    const fetchWithToken = async (url: string, options: OptionFetchWithTokenProps) => {
        return await fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${'token'}`
            }
        })
    }

    const studentService = () => {
        type AuthLoginProps = {
            username: string,
            password: string
        }

        const authLogin = async ({username, password}: AuthLoginProps): Promise<string> => {
            const response = await fetch(`${BASE_URL}/auth/student`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })

            if (!response.ok) throw new Error('Username atau Password salah')

            const responseJson = await response.json()

            return responseJson.data
        }

        return {authLogin}
    }
    const guardianService = () => {
        const authLogin = () => {

        }

        return {authLogin}
    }

    return {
        studentService,
        guardianService
    }
}