import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import SubscriptionCard from '../components/SubscriptionCard'
import { Table, Button } from 'semantic-ui-react'
import SubscriptionsSummary from '../components/SubscriptionsSummary';
import '../Subscriptions.css'

const SubscriptionList = (props) => {
    return (
        <Fragment>
            <SubscriptionsSummary data={props.subscriptions} />
            <Table className='subscriptions-table' fixed selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width='seven'>Name</Table.HeaderCell>
                        <Table.HeaderCell width='three'>Due</Table.HeaderCell>
                        <Table.HeaderCell width='two'>Price</Table.HeaderCell>
                        <Table.HeaderCell width='two'>Card</Table.HeaderCell>
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
            <div className='ui grid centered new-subscription-button'>
                <Link to='/subscriptions/new'><Button positive>New Subscription</Button></Link>
            </div>
        </Fragment>
    )
}

export default SubscriptionList