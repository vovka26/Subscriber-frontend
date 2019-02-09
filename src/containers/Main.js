import React, { PureComponent, Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import SubscriptionList from './SubscriptionList'
import SubscriptionDatails from '../components/SubscriptionDetails'
import SubscriptionForm from '../components/SubscriptionForm'

const BASEURL = 'http://localhost:4000/api/v1'
const subscriptionsApi = BASEURL + '/subscriptions'

class Main extends PureComponent {
    state = {
        subscriptions: [],
        currentSubscription: '',
        showDetails: false,
        currentRoute: '/subscriptions',
        formType: '',
        form: {
            name: '',
            price: '',
            category: '',
            due_date: '',
            website: '',
            card_number: ''
        }
    }

    componentDidMount() {
        fetch(subscriptionsApi)
            .then(res => res.json())
            .then(data => this.setState({ subscriptions: data }))
    }

    createNewSubscription = (subscriptionData) => {
        fetch(subscriptionsApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(subscriptionData)
        })
            .then(res => res.json())
            .then(createdSubscription => this.setState({
                subscriptions: [...this.state.subscriptions, createdSubscription],
                currentSubscription: createdSubscription,
                showDetails: true
            }))
    }

    onFormChange = (e) => {
        const { name, value } = e.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.createNewSubscription(this.state.form)
    }

    onDetailsClick = (subscriptionData) => {
        this.setState({
            showDetails: true,
            currentSubscription: subscriptionData
        })
        setTimeout(this.showDetailsToDefault, 1)
    }

    showDetailsToDefault = () => {
        this.setState({
            showDetails: false
        })
    }

    onEditClick = () => {
       
    }

    render() {
        return (
            <Fragment>
                <Route exact path='/subscriptions' render={() => {
                    return (
                        this.state.currentSubscription && this.state.showDetails ?
                            <Redirect to={`/subscriptions/${this.state.currentSubscription.id}`} />
                            :
                            <SubscriptionList
                                subscriptions={this.state.subscriptions}
                                onClick={this.onDetailsClick}
                            />
                    )
                }} />
                <Route exact path='/subscriptions/new' render={props => {
                    return (
                        !this.state.currentSubscription && !this.state.showDetails ?
                            <SubscriptionForm
                                onChange={this.onFormChange}
                                onSubmit={this.onFormSubmit}
                            />
                            :
                            <Redirect to={`/subscriptions/${this.state.currentSubscription.id}`} />
                    )
                }} />
                <Route exact path='/subscriptions/:id' render={props => {
                    const subscriptionIdInUrl = parseInt(props.match.params.id)
                    const subscription = this.state.subscriptions.find(subs => (
                        subs.id === subscriptionIdInUrl
                    ))
                    return (
                        <SubscriptionDatails
                            subscriptionData={subscription}
                            resetShowDetails={this.showDetailsToDefault}
                            onEditClick={this.onEditClick}
                        />
                    )
                }} />
            </Fragment>
        )
    }
}

export default Main