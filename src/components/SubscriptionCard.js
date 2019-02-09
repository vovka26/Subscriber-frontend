import React from 'react'

const SubscriptionCard = props => {
    return(
        <div>
            Subscription Name: {props.subscriptionData.name}
            <button onClick={() => props.onClick(props.subscriptionData)}>
                Details
            </button>
        </div>
    )
}

export default SubscriptionCard