import React, {Fragment} from 'react'; 
import {Link} from 'react-router-dom'
import SubscriptionCard from '../components/SubscriptionCard'
import {Table, Button} from 'semantic-ui-react'

const SubscriptionList = (props) => {
        return(
            <Fragment>
            <Table fixed selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width='eight'>Name</Table.HeaderCell>
                        <Table.HeaderCell width='three'>Montly Payment</Table.HeaderCell>
                        <Table.HeaderCell width='three'>Card</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {props.subscriptions.map(subscription => (
                        <Table.Row 
                            key={subscription.id}
                            onClick={() => props.onClick(subscription)}
                        >
                            <SubscriptionCard 
                                subscriptionData={subscription} 
                             />
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>



            <div>
            <Link to='/subscriptions/new'><Button positive>New Subscription</Button></Link>
               
            </div>
            </Fragment>
        )
}

export default SubscriptionList