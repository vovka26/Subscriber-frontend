import React from 'react';
import { Button} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const SubscriptionForm = props => {
	
    return(
        <form onSubmit={props.onSubmit}>
            <label>
					Name:
				<input 
					onChange={props.onChange} 
					type="text" 
					name="name" 
					value={props.formData.name}
				/>
				</label><br />
				<label>
					Price:
				<input 
					onChange={props.onChange} 
					type="number" 
					name="price" 
					value={props.formData.price}
					 />
				</label><br />
				<label>
					Website:
				<input 
					onChange={props.onChange} 
					type="text" 
					name="website" 
					value={props.formData.website}
					/>
				</label><br />
				<label>
					Category:
				<select 
					onChange={props.onChange} 
					name='category'
					value={props.formData.category}
				>
						<option value='other'>Other</option>
						<option value='shopping'>Shopping</option>
						<option value='entartainment'>Entartainment</option>
						<option value='grocery'>Grocery</option>
						<option value='health'>Health</option>
						<option value='hygiene'>Hygiene</option>
					</select>
				</label><br />
				<label>
					Due Date:
				{/* <input 
					onChange={props.onChange} 
					type="text" 
					name="due_date" 
					value={props.formData.due_date}
				/> */}
				 <DatePicker
				 	dateFormat='yyyy/MM/dd'
					selected={props.formData.due_date}
					onChange={props.onDateChange}
					placeholderText="Click to select a date" 
				/>
				</label><br />
				<label>
					Card Number:
				<input 
					onChange={props.onChange} 
					type="number" 
					name="card_number" 
					value={props.formData.card_number}
					 />
				</label><br />
				<Button positive type="submit">{props.type}</Button>
        </form>
    )
}

export default SubscriptionForm