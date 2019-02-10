import React from 'react';

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
				<input 
					onChange={props.onChange} 
					type="text" 
					name="due_date" 
					value={props.formData.due_date}
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
				<input type="submit" name="Submit" />
        </form>
    )
}

export default SubscriptionForm