import React from 'react'
import {Image} from 'semantic-ui-react'
import logoImage from '../images/logo-index.png'
import '../App.css'

const About = () => {
    return(
        <div className='ui grid centered'>
            <Image 
                className='logo-image'
                src={logoImage}

            />
        </div>
    )
}

export default About