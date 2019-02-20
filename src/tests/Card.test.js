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

    it('RENDER div .card QUANDO state.loading=false E state.cardVisibility=true', () => {
        wrapper.setState({ loading: false })
        wrapper.setProps({ card: { name: 'card' } })
        expect(wrapper.find('.card').length).toBe(1)
    })

    it('NOT RENDER div .card QUANDO state.loading=false E state.cardVisibility=hidden', () => {
        wrapper.setState({ loading: false, cardVisibility: false })
        wrapper.setProps({ card: { name: 'card' } })
        

        expect(wrapper.find('#card').length).toBe(0)
    })
})