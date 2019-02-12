import React, { PureComponent, Fragment } from 'react'
import { Route } from 'react-router-dom'
import SubscriptionList from './SubscriptionList'
import SubscriptionDatails from '../components/SubscriptionDetails'
import SubscriptionForm from '../components/SubscriptionForm'
import Dashboard from '../components/Dashboard';


const BASEURL = 'http://localhost:4000/api/v1'
const subscriptionsApi = BASEURL + '/subscriptions'

class Main extends PureComponent {
    state = {
        subscriptions: [],
        currentRoute: '/subscriptions',
        id: '',
        name: '',
        price: '',
        category: '',
        due_date: '',
        website: '',
        card_number: ''
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
            .then(createdSubscription => {
                this.setState({
                    subscriptions: [...this.state.subscriptions, createdSubscription]
                },
                    this.redirectToNewUrl(`/subscriptions/`))
            })
    }

    editSubscription = (subscriptionData) => {
        const id = subscriptionData.id
        fetch(`${subscriptionsApi}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(subscriptionData)
        })
            .then(res => res.json())
            .then(updatedSubscription => {
                const copyOfSubscriptionsArray = this.state.subscriptions.slice()

                const index = copyOfSubscriptionsArray.findIndex(subscription => (
                    subscription.id === updatedSubscription.id
                ))
                copyOfSubscriptionsArray.splice(index, 1, updatedSubscription)

                this.setState({
                    subscriptions: copyOfSubscriptionsArray
                })
                this.redirectToNewUrl(`/subscriptions`)
            })
    }

    cancelSubscription = subscriptionObj => {
        const id = subscriptionObj.id
        fetch(`${subscriptionsApi}/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(deletedSubscription => {
                const copyOfSubscriptionsArray = this.state.subscriptions.slice()
                
                const index = copyOfSubscriptionsArray.findIndex(subscription => (
                    subscription.id === deletedSubscription.id
                ))
                copyOfSubscriptionsArray.splice(index, 1)

                this.setState({
                    subscriptions: copyOfSubscriptionsArray
                })
                this.redirectToNewUrl('/subscriptions')
            })
    }

    redirectToNewUrl = (newUrl) => {
        this.props.history.push(newUrl)
    }

    onFormChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSelectCategory = (e, { value }) => {
        this.setState({
            category: value
        })
    }

    onDateChange = (e, { value }) => {
        this.setState({
            due_date: value
        })
    }

    onFormCreate = (e) => {
        e.preventDefault()
        const data = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            due_date: this.state.due_date,
            website: this.state.website,
            card_number: this.state.card_number
        }
        this.createNewSubscription(data)
        this.clearForm()
    }

    onFormEdit = (e) => {
        e.preventDefault()
        const data = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            due_date: this.state.due_date,
            website: this.state.website,
            card_number: this.state.card_number
        }
        this.editSubscription(data)
        this.clearForm()
    }

    clearForm = () => {
        this.setState({
            id: '',
            name: '',
            price: '',
            category: '',
            due_date: null,
            website: '',
            card_number: ''
        })
    }

    onDetailsClick = (subscriptionData) => {
        this.redirectToNewUrl(`/subscriptions/${subscriptionData.id}`)
    }

    setFormStateOnEditClick = (subscriptionData) => {
        this.setState({
            id: subscriptionData.id,
            name: subscriptionData.name,
            price: subscriptionData.price,
            category: subscriptionData.category,
            due_date: subscriptionData.due_date,
            website: subscriptionData.website,
            card_number: subscriptionData.card_number
        })
    }

    onEditClick = (subscriptionData) => {
        this.setFormStateOnEditClick(subscriptionData)
        this.redirectToNewUrl(`/subscriptions/${subscriptionData.id}/edit`)
    }

    // sortSubscriptionsRows = (e) => {
    //     const copyOfSubscriptionsArray = this.state.subscriptions.slice()
    //     debugger
    //     this.setState({

    //     })
    // }

    render() {
        return (
            <Fragment>
                <Route path='/dashboard' render={() => {
                    return (
                        <Dashboard
                            subscriptions={this.state.subscriptions}
                        />)
                }} />
                <Route exact path='/subscriptions' render={() => {
                    return (
                        <SubscriptionList
                            sortRows={this.sortSubscriptionsRows}
                            subscriptions={this.state.subscriptions}
                            onClick={this.onDetailsClick}
                        />
                    )
                }} />
                <Route exact path='/subscriptions/new' render={props => {
                    return (
                        <SubscriptionForm
                            onChange={this.onFormChange}
                            onSubmit={this.onFormCreate}
                            formData={this.state}
                            onDateChange={this.onDateChange}
                            onSelect={this.onSelectCategory}
                            type='Create'
                        />
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
                            onEditClick={this.onEditClick}
                            onCancelClick={this.cancelSubscription}
                        />
                    )
                }} />
                <Route exact path='/subscriptions/:id/edit' render={props => {
                    const id = parseInt(props.match.params.id)
                    const subscriptionData = this.state.subscriptions.find(subs => (
                        subs.id === id
                    ))
                    return (
                        <SubscriptionForm
                            subscriptionData={subscriptionData}
                            onChange={this.onFormChange}
                            onSubmit={this.onFormEdit}
                            formData={this.state}
                            onDateChange={this.onDateChange}
                            type='Save'
                        />
                    )
                }} />
            </Fragment>
        )
    }
}

export default Main