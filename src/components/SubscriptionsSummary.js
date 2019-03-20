import React, { Fragment } from 'react'
import UpcomingPayments from '../containers/UpcomingPayments'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const TotalSpending = (props) => {

    const upComingPayment = (subscription) => {
        const filteredData = subscription.filter(subs => isUpcoming(subs.due_date))
        filteredData.sort((payment1, payment2) => {
            return new Date(payment1.due_date) - new Date(payment2.due_date)
        })
        const upComingDates = []
        filteredData.map(subscription => (
            upComingDates.push(`${subscription.name} on ${getMonth(subscription.due_date)}, ${getDay(subscription.due_date)}`)
        ))
        return upComingDates
    }

    const getMonth = (date) => {
        const month = new Date(`${date} GMT-0500`).getMonth()
        return months[month]
    }

    const getDay = (date) => {
        const day = new Date(`${date} GMT-0500`).getDate()
        return day
    }

    const isUpcoming = (date) => {
        const inputDate = new Date(`${date} GMT-0500`)
        const endDate = new Date()
        endDate.setDate(endDate.getDate() + 7)
        if (inputDate < endDate && inputDate > new Date()) {
            return true
        }
    }

    const totalAmount = (data) => {
        let amount = 0
        data.map(subs => amount += subs.price)
        return amount.toFixed(2)
    }
    return (
        <Fragment>
            <h3 className='total-spending-box ui grid centered'>
                Total Monthly Payments: ${totalAmount(props.data)}
            </h3>
            <div className='upcoming-payments-div'>
                <UpcomingPayments data={upComingPayment(props.data)}/>
            </div>
        </Fragment>
    )
}

export default TotalSpending