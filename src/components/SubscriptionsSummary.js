import React, { Fragment } from 'react'

const TotalSpending = (props) => {

    const upComingPayment = (subscription) => {
        const filteredData = subscription.filter(subs => isUpcoming(subs.due_date))
        filteredData.sort((payment1, payment2) => {
            return new Date(payment1.due_date) - new Date(payment2.due_date)
        })
        const upComingDates = []
        filteredData.map(subscription => (
            upComingDates.push(`${subscription.name} on ${subscription.due_date}`)
        ))
        return upComingDates
    }

    const isUpcoming = (date) => {
        const inputDate = new Date(`${date} GMT-0500`)
        const endDate = new Date()
        endDate.setDate(endDate.getDate() + 7)
        if (inputDate < endDate) {
            return true
        }
    }

    const totalAmount = (data) => {
        let amount = 0
        data.map(subs => amount += subs.price)
        return amount
    }
    return (
        <Fragment>
            <h3 className='total-spending-box ui grid centered'>
                Total Monthly Payments: ${totalAmount(props.data)}
            </h3>
            <div>
                Upcoming Payments:
                {upComingPayment(props.data).map(paym => (
                    <div key={paym}>
                        {paym}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default TotalSpending