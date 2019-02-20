import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import { Card } from '../components/Card'
import Spinner from '../components/Spinner'

describe('<Card />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card game={{ status: true, score: 0 }} card={{ cards: [{ name: 'card' }] }} />)
    })

    it('RENDER SPINNER QUANDO state.loading=true', () => {
        wrapper.setState({ loading: true })
        expect(wrapper.find(Spinner).length).toBe(1)
    })

    it('RENDER div #card QUANDO state.loading=false', () => {
        wrapper.setState({ loading: false })
        wrapper.setProps({ card: { name: 'card' } })
        expect(wrapper.find('#card').length).toBe(1)
    })

    it('RENDER guess input QUANDO state.loading=false E state.showInput=true', () => {
        wrapper.setState({ loading: false, showInput: true })
        wrapper.setProps({ card: { name: 'card' } })
        expect(wrapper.find('input').length).toBe(1)
    })

    it('NOT RENDER guess input QUANDO state.loading=false E state.showInput=false', () => {
        wrapper.setState({ loading: false, showInput: false })
        wrapper.setProps({ card: { name: 'card' } })
        expect(wrapper.find('input').length).toBe(0)
    })

    it('RENDER BTN.advinhar E BTN.detalhes QUANDO state.loading=false E state.showInput=false', () => {
        wrapper.setState({ loading: false, showInput: false })
        wrapper.setProps({ card: { name: 'card' } })
        expect(wrapper.find('button').length).toBe(2)
    })

    it('RENDER BTN.detalhes E BTN.ok QUANDO state.loading=false E state.showInput=true', () => {
        wrapper.setState({ loading: false, showInput: true })
        wrapper.setProps({ card: { name: 'card' } })
        expect(wrapper.find('button').length).toBe(2)
    })

})