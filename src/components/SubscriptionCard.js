import React, { Fragment } from 'react'
import { Table } from 'semantic-ui-react'

const SubscriptionCard = props => {
    return (
        <Fragment>
            <Table.Cell> {props.subscriptionData.name}</Table.Cell>
            <Table.Cell> ${props.subscriptionData.price}</Table.Cell>
            <Table.Cell>{props.subscriptionData.card_number}</Table.Cell>
        </Fragment>
    )
}

export default SubscriptionCard