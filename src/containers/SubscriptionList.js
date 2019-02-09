import React from 'react'; 
import {Link} from 'react-router-dom'
import SubscriptionCard from '../components/SubscriptionCard'


const SubscriptionList = (props) => {
        return(
            <div>
                <Link to='/subscriptions/new' >New Subscription</Link>
                {props.subscriptions.map(subscription => (
                    <SubscriptionCard 
                        key={subscription.id}
                        subscriptionData={subscription} 
                        onClick={props.onClick}
                    />
                ))}
            </div>
        )
}

export default SubscriptionList