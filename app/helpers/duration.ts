// A function to converts time to milliseconds depending on time unit

export const convertToMilliseconds = (value: number, unit: 'seconds' | 'minutes' | 'hours' | 'days') => {
    switch (unit) {
        case 'seconds':
        return value * 1000
        case 'minutes':
        return value * 60000
        case 'hours':
        return value * 3600000
        case 'days':
        return value * 86400000
        default:
        return value
    }
    }


  