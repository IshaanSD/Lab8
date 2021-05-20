/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router'

describe('history stack',()=>{
    test('settings branch',()=>{
        pushToHistory('settings')
        expect(window.history.length).toBe(2)
        expect(window.history.state.page).toBe("settings")
    })
    test('entry branch',()=>{
        pushToHistory('entry', 69) 
        expect(window.history.length).toBe(3)
        expect(window.history.state.page).toBe("entry69")
    })
    test('all branches',()=>{
        
        expect(window.history.length).toBe(3)

        pushToHistory('settings')
        expect(window.history.length).toBe(4)
        expect(window.history.state.page).toBe("settings")

        pushToHistory('home')
        expect(window.history.length).toBe(5)
        expect(window.history.state.page).toBeUndefined()

    })

})