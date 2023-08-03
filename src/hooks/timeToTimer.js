import { useState, useEffect } from 'react'

export const useCountdownTimer = (targetTime, shouldStart) => {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!shouldStart) return
    const targetDate = new Date(targetTime).getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance <= 0) {
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      } else {
        const hoursRemaining = Math.floor(distance / (1000 * 60 * 60))
        const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000)

        setHours(hoursRemaining)
        setMinutes(minutesRemaining)
        setSeconds(secondsRemaining)
      }
    }

    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [targetTime, shouldStart])

  return { hours, minutes, seconds }
}