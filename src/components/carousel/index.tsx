'use client'

import style from './index.module.scss'
import clsx from 'clsx'
import Button from '@/components/button'
import { useEffect, useState } from 'react'
import { CarouselType } from '@/components/carousel/index.type'

const Component = ({
    steps,
    infinite,
    automatic = false,
    time = 5000,
    className,
    ...props
}: CarouselType) => {
    const [currentStep, setCurrentStep] = useState<number>(0)

    useEffect(() => {
        if (automatic) {
            const timer = setInterval(() => {
                setCurrentStep((x) => {
                    if (x === steps.length - 1) {
                        return 0
                    }
                    return x + 1
                })
            }, time)

            return () => {
                clearInterval(timer)
            }
        }
    }, [automatic, time, steps])

    return (
        <div
            {...props}
            className={clsx(style.carousel, className)}
            onTouchStart={(e) => {
                e.changedTouches.item(0).screenX
            }}
        >
            {(infinite || currentStep > 0) && (
                <Button
                    className={style.backButton}
                    icon="keyboard_arrow_right"
                    onClick={() => {
                        if (currentStep === 0) {
                            setCurrentStep(steps.length - 1)
                        } else {
                            setCurrentStep((x) => x - 1)
                        }
                    }}
                />
            )}
            <section className={style.allSteps}>
                {steps.map((step, stepKey) => {
                    return (
                        <div
                            key={stepKey}
                            className={clsx(
                                style.step,
                                currentStep === stepKey && style.currentStep
                            )}
                            style={{
                                transform: `translateX(calc(100% * -${currentStep}))`,
                            }}
                        >
                            {step}
                        </div>
                    )
                })}
            </section>
            {(infinite || currentStep < steps.length - 1) && (
                <Button
                    className={style.nextButton}
                    icon="keyboard_arrow_right"
                    onClick={() => {
                        if (currentStep === steps.length - 1) {
                            setCurrentStep(0)
                        } else {
                            setCurrentStep((x) => x + 1)
                        }
                    }}
                />
            )}
            <div className={style.stepIndicator}>
                {steps.map((step, stepKey) => {
                    return (
                        <div
                            key={stepKey}
                            className={clsx(
                                style.dot,
                                currentStep === stepKey && style.currentStepDot
                            )}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Component
