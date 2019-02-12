import React from 'react'

const SubscriptionDetails = props => {
    //renders null on the first load before fetch request to avoid an error
    if (props.subscriptionData) {
        const { name, category, price, website, card_number, due_date } = props.subscriptionData
        return (
            <div className='subscription-details'>
                <h1>{name}</h1>
                <h3>Category: {category}</h3>
                <h3>Price: {price}</h3>
                <h3>Website: <a href={website} target="_blank">{website}</a></h3>
                <h3>Card Number: {card_number}</h3>
                <h3>Due Date: {due_date}</h3>
                <button onClick={() => props.onEditClick(props.subscriptionData)}>Edit</button>
                <button onClick={() => props.onCancelClick(props.subscriptionData)}>Cancel</button>
            </div>
        )
    } else {
        return null
    }

}

export default SubscriptionDetails