import { AbstractService } from './service'
import { ExerciseType, TrainingType } from '@/types/training.type'

export class ExerciseService extends AbstractService {
    constructor({ token }: { token?: string }) {
        super()
        this.token = token
    }

    create = async ({ exercise }: { exercise: ExerciseType }) => {
        const response = await fetch(`${this.HOST}/exercise`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
            body: JSON.stringify(exercise),
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        }
    }

    update = async ({
        id,
        exercise,
    }: {
        id: string
        exercise: ExerciseType
    }) => {
        const response = await fetch(`${this.HOST}/exercise?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
            body: JSON.stringify(exercise),
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        }
    }

    remove = async ({ id }: { id: string }) => {
        const response = await fetch(`${this.HOST}/exercise?id=${id}`, {
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
        const response = await fetch(`${this.HOST}/exercise/byId?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        } else {
            return (await response.json()) as ExerciseType | null
        }
    }

    getAll = async () => {
        const response = await fetch(`${this.HOST}/exercise`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearier ${this.token}`,
            },
        })

        if (response.status < 200 || response.status > 299) {
            throw await response.json()
        } else {
            return (await response.json()) as ExerciseType[]
        }
    }
}
