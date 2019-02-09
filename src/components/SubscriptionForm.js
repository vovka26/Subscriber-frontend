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
					
				/>
				</label><br />
				<label>
					Price:
				<input 
					onChange={props.onChange} 
					type="number" 
					name="price" 
					 />
				</label><br />
				<label>
					Website:
				<input 
					onChange={props.onChange} 
					type="text" 
					name="website" 
					/>
				</label><br />
				<label>
					Category:
				<select 
					onChange={props.onChange} 
					name='category'
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
					/>
				</label><br />
				<label>
					Card Number:
				<input 
					onChange={props.onChange} 
					type="number" 
					name="card_number" 
					 />
				</label><br />
				<input type="submit" name="Submit" />
        </form>
    )
}

export default SubscriptionForm