import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import { Nav } from '../components/Nav'

describe('<Nav />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Nav location={{ pathname: '/' }} />)
    })

    it('RENDER LINK LOGO', () => {
        expect(wrapper.find('#linkLogo').length).toBe(1)
    })

    it('RENDER LINK HOME', () => {
        expect(wrapper.find('#linkHome').length).toBe(1)
    })
    
    it('RENDER LINK ABOUT', () => {
        expect(wrapper.find('#linkAbout').length).toBe(1)
    })

    it('RENDER LINK RANKING', () => {
        expect(wrapper.find('#linkRanking').length).toBe(1)
    })

    it('RENDER LOGO', () => {
        expect(wrapper.find('#logo').length).toBe(1)
    })
})