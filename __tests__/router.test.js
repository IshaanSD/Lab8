/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router'
let len = 1
describe('history stack length and states',()=>{
    test('settings branch',()=>{
        pushToHistory('settings')
        len++;
        expect(window.history.length).toBe(len)
        
        expect(window.history.state.page).toBe("settings")
    })
    test('entry branch',()=>{
        for(let i=1;i<10;i++){
        pushToHistory('entry', i) 
        len++;
        expect(window.history.length).toBe(len)
        expect(window.history.state.page).toBe("entry"+i)
    }
    })
    test('all branches',()=>{
        
        expect(window.history.length).toBe(len)

        pushToHistory('settings')
        len++;
        expect(window.history.length).toBe(len)
        expect(window.history.state.page).toBe("settings")

        pushToHistory('home')
        len++;
        expect(window.history.length).toBe(len)
        expect(window.history.state.page).toBeUndefined()

    })

})