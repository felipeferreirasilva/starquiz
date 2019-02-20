import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

// CRIA MOCK DO HISTORY PARA UTILIZAR COMO PROP
import { createMemoryHistory } from 'history'

// COMPONENTS
import { Game } from '../components/Game'
import Spinner from '../components/Spinner'
import Timer from '../components/Timer'
import Card from '../components/Card'
import GameOver from '../components/GameOver'


describe('<Game />', () => {
    let wrapper;
    const history = createMemoryHistory('/')

    beforeEach(() => {
        wrapper = shallow(<Game game={{ status: true, score: 0 }} history={history} />)
    })

    it('RENDER SPINNER QUANDO state.loading=true', () => {
        wrapper.setState({ loading: true })
        expect(wrapper.find(Spinner).length).toBe(1)
    })

    it('RENDER TIMER QUANDO state.loading=false E props.game.status=true', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find(Timer).length).toBe(1)
    })

    it('RENDER CARD QUANDO state.loading=false E props.game.status=true E state.cards > 0', () => {
        wrapper.setState({ loading: false, cards: [{ name: 'card' }] })
        expect(wrapper.find(Card).length).toBe(1)
    })

    it('RENDER #moreCards QUANDO state.loading=false E props.game.status=true', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#moreCards').length).toBe(1)
    })

    it('RENDER GAMEOVER QUANDO state.loading=false E props.game.status=false', () => {
        wrapper = shallow(<Game game={{ status: false, score: 0 }} history={history} />)
        wrapper.setState({ loading: false })
        expect(wrapper.find(GameOver).length).toBe(1)
    })
})