import React from 'react'
import {Image} from 'semantic-ui-react'
import logoImage from '../images/logo-index.png'

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