import { TrainingType } from '@/types/training.type'
import Card from '@/components/card'
import Link from 'next/link'
import { Weekday } from '@/constants/weekday'
import clsx from 'clsx'
import style from './trainingCard.module.scss'
import Icon from '@/components/icon'

export const TrainingCard = ({ training }: { training: TrainingType }) => {
    return (
        <Card
            key={training.id}
            className={clsx(style.card, style[training.status || 'OPEN'])}
        >
            <div className={style.background} />
            <div className={clsx(style.icon, style[training.status || 'OPEN'])}>
                {training.status === 'OPEN' && <Icon icon="play_arrow" />}
                {training.status === 'ARCHIVED' && <Icon icon="archive" />}
                {training.status === 'CLOSED' && <Icon icon="check" />}
            </div>
            <Link href={`/private/training/${training.id}`}>
                <h3>{training.name}</h3>
            </Link>
            {training?.weekday ? (
                <label>{Weekday[training.weekday]}</label>
            ) : (
                <label>Dia da semana não definido</label>
            )}
            <small>Expira: {training.expiration_date}</small>
            <p>{training.exercises?.length} exercício(s)</p>
        </Card>
    )
}
