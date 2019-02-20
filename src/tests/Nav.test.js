import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import { Nav } from '../components/Nav'
import { Link } from 'react-router-dom'

describe('<Nav />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Nav location={{ pathname: '/' }} />)
    })

    it('RENDER 4 LINKS, LOGO, HOME, ABOUT, RANKING', () => {
        expect(wrapper.find(Link).length).toBe(4)
    })
})