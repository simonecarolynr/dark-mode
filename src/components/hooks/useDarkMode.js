import {useLocalStorage} from './useLocalStorage'
import { useEffect } from 'react'

export function useDarkMode(key) {

    const [ darkMode, setdarkMode] = useLocalStorage('dark-mode', key)

    useEffect(() => {
       if(darkMode) {
           window.document.body.classList.add('dark-mode');
       } else {
           window.document.body.classList.remove('dark-mode');
       }
    })

    return [ darkMode, setdarkMode ];
}
