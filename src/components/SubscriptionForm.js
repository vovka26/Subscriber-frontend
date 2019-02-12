import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';
import "react-datepicker/dist/react-datepicker.css";
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


const SubscriptionForm = props => {

	return (
		<Form className='subscription-form' onSubmit={props.onSubmit}>
			<Form.Input
				fluid label='Name'
				name='name'
				placeholder='Subscription Name'
				onChange={props.onChange}
				value={props.formData.name}
			/>
			<Form.Select
				fluid label='Category'
				name='category'
				options={selectOptions}
				placeholder='Select Category'
				onChange={props.onSelect}
				value={props.formData.category}
			/>
			<Form.Input
				fluid label='Price'
				placeholder='Monthly Payment'
				name='price'
				type='number'
				onChange={props.onChange}
				value={props.formData.price}
			/>
			<Form.Input
				fluid label='Website'
				placeholder="Website"
				name='website'
				onChange={props.onChange}
				value={props.formData.website}
			/>
			<Form.Input
				fluid label='Card Number'
				placeholder='4 digits of the card'
				name='card_number'
				type='number'
				onChange={props.onChange}
				value={props.formData.card_number}
			/>
			<DateInput
				fluid label='Date'
				placeholder="Click to select a date"
				onChange={props.onDateChange}
				value={props.formData.due_date}
			/>

			<Button positive type="submit" className='form-submit-button'>{props.type}</Button>
		</Form>
	)
}

export default SubscriptionForm