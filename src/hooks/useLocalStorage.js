import { useEffect, useState } from 'react'

const PREFIX = "favourz-codepen-"

function useLocalStorage(key, initialValue) {
    const PREFIXED_KEY = PREFIX + key

    const [value, setValue] = useState(() => {
        const PREV_STORED_VALUE = JSON.parse(localStorage.getItem(PREFIXED_KEY))
        if (PREV_STORED_VALUE != null) return PREV_STORED_VALUE

        if (typeof initialValue === 'function') {
            return initialValue()
        }
        else {
            return initialValue
        }
    });



    useEffect(() => {
        localStorage.setItem(PREFIXED_KEY, JSON.stringify(value))

    }, [PREFIXED_KEY, value])

    return [value, setValue]
}

export default useLocalStorage