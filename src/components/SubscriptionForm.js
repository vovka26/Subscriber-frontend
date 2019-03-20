import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import '../SubscriptionForm.css'


const selectOptions = [
	{ text: 'Shopping', value: 'Shopping' },
	{ text: 'Entertainment', value: 'Entertainment' },
	{ text: 'Food', value: 'Food' },
	{ text: 'Health', value: 'Health' },
	{ text: 'Hygiene', value: 'Hygiene' },
	{ text: 'Bills', value: 'Bills' },
	{ text: 'Other', value: 'Other' }
]


class SubscriptionForm extends Component {
	componentWillUnmount(){
		this.props.clearForm()
	}

	render() {
		return (
			<Form className='subscription-form' onSubmit={this.props.onSubmit}>
				<Form.Input
					fluid label='Name'
					name='name'
					placeholder='Subscription Name'
					onChange={this.props.onChange}
					value={this.props.formData.name}
				/>
				<Form.Select
					fluid label='Category'
					name='category'
					options={selectOptions}
					placeholder='Select Category'
					onChange={this.props.onSelect}
					value={this.props.formData.category}
				/>
				<Form.Input
					fluid label='Price'
					placeholder='Monthly Payment'
					name='price'
					type='number'
					onChange={this.props.onChange}
					value={this.props.formData.price}
				/>
				<Form.Input
					fluid label='Website'
					placeholder="Website"
					name='website'
					onChange={this.props.onChange}
					value={this.props.formData.website}
				/>
				<Form.Input
					fluid label='Card Number'
					placeholder='4 digits of the card'
					name='card_number'
					type='number'
					onChange={this.props.onChange}
					value={this.props.formData.card_number}
				/>
				<DateInput
					fluid label='Date'
					placeholder="Click to select a date"
					onChange={this.props.onDateChange}
					value={this.props.formData.due_date}
					dateFormat='YYYY-MM-DD'
				/>

				<Button positive type="submit" className='form-submit-button'>{this.props.type}</Button>
			</Form>
		)
	}
}

export default SubscriptionForm