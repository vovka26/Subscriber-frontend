import React, {PureComponent} from 'react'
import {Form, Button} from 'semantic-ui-react'
import '../Login.css'

class Login extends PureComponent {
    render(){
        return(
            <div className='login-form'>
                <Form onSubmit={this.props.onSubmit}>
                    <Form.Input 
                        className='login-input'
                        onChange={this.props.setField}
                        name='username'
                        fluid label='Username'
                    />
                    <Form.Input 
                        className='login-input'
                        onChange={this.props.setField}
                        name='password'
                        type='password'
                        fluid label='Password'
                    />
                    <Button 
                        type='submit'
                        primary
                    >
                       Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login