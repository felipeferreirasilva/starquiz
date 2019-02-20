import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

// PARA PASSAR O HISTORY COMO PROP GLOBAL
import { createMemoryHistory } from 'history'

// COMPONENTS
import { Game } from '../components/Game'
import Spinner from '../components/Spinner'

describe('<Game />', () => {
    let wrapper;
    const history = createMemoryHistory('/')
    beforeEach(() => {
        // PROPS QUE VAO NO LIFE CYCLE OU STORE
        wrapper = shallow(<Game game={{status: true, score: 0}} history={history}/>)
    })
    it('CONTEM SPINNER QUANDO LOADING É IGUAL A TRUE', () => {
        // DEFINE STATES ANTES DE BUSCAR CONTEUDO NO COMPONENT
        wrapper.setState({loading: true, cards:{}})
        let spinner = wrapper.find(Spinner)
        expect(spinner.length).toBe(2)
    });
})