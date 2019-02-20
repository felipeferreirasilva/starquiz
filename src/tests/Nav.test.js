import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Nav from '../components/Nav'

import { Link } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

describe('<Nav />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Nav />)
    })
    it('Deve conter 3 links se nao estiver logado.', () => {
        let links = wrapper.find(Link)
        expect(links.length).toBe(3)
    });
})