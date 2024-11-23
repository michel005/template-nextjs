export type TimeExecutionPlan = {
    target_time?: string
}

export type SeriesExecutionPlan = {
    total_series?: number
    resting_time?: string
}

export type RepetitionExecutionPlan = {
    total_series?: number
    total_repetitions?: number
    resting_time?: string
}

export type DistanceExecutionPlan = {
    target_time?: string
    distance?: number
    distance_unit_measure?: string
}

export type ExerciseType = {
    id?: string
    order?: number
    user_id?: string
    training_id?: string
    name?: string
    description?: string
    measure_type?: 'TIME' | 'SERIES' | 'REPETITIONS' | 'DISTANCE'
    execution_plan:
        | TimeExecutionPlan
        | SeriesExecutionPlan
        | RepetitionExecutionPlan
        | DistanceExecutionPlan
    drops?: number
}

export type TrainingType = {
    id?: string
    name?: string
    expiration_date?: string
    exercises?: ExerciseType[]
    status?: 'OPEN' | 'ARCHIVED' | 'CLOSED'
    weekday?: number
}
