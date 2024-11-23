import { LoginType } from '@/types/login.type'
import { AbstractService } from './service'
import { UserType } from '@/types/user.type'
import { LoginResponseType } from '@/types/loginResponse.type'

export class UserService extends AbstractService {
    constructor({ token }: { token?: string }) {
        super()
        this.token = token
    }

    me = async () => {
        console.log(this.token)
        const resposne = await fetch(`${this.HOST}/user/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
        })

        if (resposne.status > 299) {
            throw await resposne.json()
        }

        return await resposne.json() as UserType
    }

    login = async ({ email, password }: LoginType) => {
        const response = await fetch(`${this.HOST}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        if (response.status > 299) {
            throw await response.json()
        }

        return await response.json() as LoginResponseType
    }

    create = async (user: UserType) => {
        await fetch(`${this.HOST}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    }

    update = async (user: UserType) => {
        const response = await fetch(`${this.HOST}/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
            body: JSON.stringify(user),
        })
        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        }
    }

    changePassword = async ({
        current,
        new_password,
        confirmation,
    }: {
        current?: string
        new_password?: string
        confirmation?: string
    }) => {
        const response = await fetch(`${this.HOST}/user/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
            body: JSON.stringify({
                current,
                new_password,
                confirmation,
            }),
        })
        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        }
    }

    remove = async ({ password }: { password: string }) => {
        await fetch(`${this.HOST}/user`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
            body: JSON.stringify({
                password,
            }),
        })
    }
}
