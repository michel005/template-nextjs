'use client'

import { UserService } from '@/services/user.service'
import { TrainingService } from '@/services/training.service'
import { ExerciseService } from '@/services/exercise.service'
import { useContext } from 'react'
import { UserContext } from '@/context/user.context'

const useApiService = () => {
    const { token } = useContext(UserContext)

    return {
        user: new UserService({ token }),
        training: new TrainingService({ token }),
        exercise: new ExerciseService({ token }),
    }
}

export default useApiService
