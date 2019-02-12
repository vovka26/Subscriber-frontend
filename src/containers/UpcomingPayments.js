import React, { PureComponent, Fragment } from 'react'
import { Transition, Button } from 'semantic-ui-react'
import '../Subscriptions.css'

class UpcomingPayments extends PureComponent {
    state = { visible: false }
    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        return (
            <Fragment>
                <div className='ui grid centered'>
                    <Button negative content={this.state.visible ? 'Hide Upcoming Payments' : 'Show Upcoming Payments'} onClick={this.toggleVisibility} />
                </div>
                <Transition visible={this.state.visible} animation='zoom' duration={500}>
                    <div className=' ui grid centered upcoming-payments-details'>
                        {this.props.data.map(paym => (
                            <h5 key={paym}>
                                {paym}
                            </h5>
                        ))}
                    </div>
                </Transition>
            </Fragment>
        )
    }
}

export default UpcomingPayments