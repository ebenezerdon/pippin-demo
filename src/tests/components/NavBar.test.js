import React from 'react'
import { shallow } from 'enzyme'
import NavbarComponent from '../../app/navBar/NavbarComponent'

describe(' Component', () => {
    it('should render the NavBar', () => {
        const component = shallow(<NavbarComponent />)
        expect(component.exists()).toBe(true)
    })
})
