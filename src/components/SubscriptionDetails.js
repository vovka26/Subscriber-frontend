import React from 'react'

const SubscriptionDetails = props => {
    //renders null on the first load before fetch request to avoid an error
    if (props.subscriptionData) {
         const {name, category, price, website, card_number, due_date } = props.subscriptionData
         return(
            <div>
                <h1>Name: {name}</h1>
                <h3>Category: {category}</h3>
                <h3>Price: {price}</h3>
                <h3>Website: {website}</h3>
                <h3>Card Number: {card_number}</h3>
                <h3>Due Date: {due_date}</h3>
                <button onClick={() => props.onEditClick(props.subscriptionData)}>Edit</button>
                <button onClick={() => props.onCancelClick(props.subscriptionData)}>Cancel</button>
            </div>
        )
    }else{
        return null
    }
    
}

export default SubscriptionDetails