import { LoginType } from '@/types/login.type'
import { AbstractService } from './service'
import { UserType } from '@/types/user.type'

export class UserService extends AbstractService {
    constructor({ token }: { token?: string }) {
        super()
        this.token = token
    }

    me = async () => {
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

        return await resposne.json()
    }

    login = async ({ email, password }: LoginType) => {
        const resposne = await fetch(`${this.HOST}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        if (resposne.status > 299) {
            throw await resposne.json()
        }

        return await resposne.json()
    }

    create = async ({ full_name, email, birthday, password }: UserType) => {
        await fetch(`${this.HOST}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name,
                email,
                birthday,
                password,
            }),
        })
    }

    update = async ({
        full_name,
        birthday,
    }: {
        full_name: string
        birthday: string
    }) => {
        await fetch(`${this.HOST}/user`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
            body: JSON.stringify({
                full_name,
                birthday,
            }),
        })
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
