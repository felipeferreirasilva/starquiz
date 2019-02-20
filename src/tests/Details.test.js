import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import Details from '../components/Details'
import Spinner from '../components/Spinner'

describe('<Details />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Details 
            game={{ status: true, score: 0 }} 
            card={{ name: 'card', species: ['specie1'], films: ['film1'], vehicles: ['vehicle1'], homeworld: 'homeworld' }} 
            cardId={'md1'}/>)
    })

    it('RENDER SPINNER QUANDO state.loading=true', () => {
        wrapper.setState({ loading: true })
        expect(wrapper.find(Spinner).length).toBe(1)
    })

    it('RENDER #details QUANDO state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#details').length).toBe(1)
    })

    it('RENDER #cardImg state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#cardImg').length).toBe(1)
    })

    it('RENDER #cardSpecies state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#cardSpecies').length).toBe(1)
    })

    it('RENDER #cardHeight state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#cardHeight').length).toBe(1)
    })

    it('RENDER #cardHair state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#cardHair').length).toBe(1)
    })

    it('RENDER #cardHomeworld state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#cardHomeworld').length).toBe(1)
    })

    it('RENDER #cardFilms state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#cardFilms').length).toBe(1)
    })

    it('RENDER #cardVehicles state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#cardVehicles').length).toBe(1)
    })

    it('RENDER BTN.close QUANDO state.loading=false', () => {
        wrapper.setState({ loading: false })
        expect(wrapper.find('#close').length).toBe(1)
    })
})