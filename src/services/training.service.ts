import { AbstractService } from './service'
import { TrainingType } from '@/types/training.type'

export class TrainingService extends AbstractService {
    constructor({ token }: { token?: string }) {
        super()
        this.token = token
    }

    create = async ({ training }: { training: TrainingType }) => {
        const response = await fetch(`${this.HOST}/training`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
            body: JSON.stringify(training),
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        }
    }

    update = async ({
        id,
        training,
    }: {
        id: string
        training: TrainingType
    }) => {
        const response = await fetch(`${this.HOST}/training?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
            body: JSON.stringify(training),
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        }
    }

    remove = async ({ id }: { id: string }) => {
        const response = await fetch(`${this.HOST}/training?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        }
    }

    getOne = async ({ id }: { id: string }) => {
        const response = await fetch(`${this.HOST}/training/byId?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        } else {
            return (await response.json()) as TrainingType | null
        }
    }

    getAll = async () => {
        const response = await fetch(`${this.HOST}/training`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        } else {
            return (await response.json()) as TrainingType[]
        }
    }
}
