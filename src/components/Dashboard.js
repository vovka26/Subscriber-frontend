import React, {PureComponent} from 'react'
import DoughnutChart from './DoughnutChart';

class Dashboard extends PureComponent {

    getRandomColor = () => {
		const hex = Math.floor(Math.random() * 0xFFFFFF)
		return "#" + ("000000" + hex.toString(16)).substr(-6)
	}

	data = () => {
		const labels = []
		const categoriesAmount = []
		
		this.props.subscriptions.map(subs => {
			let foundCategory = categoriesAmount.find(cat => cat[subs.category])
			if (foundCategory) {
				foundCategory[subs.category] += subs.price
			}else{
				labels.push(subs.category)
				categoriesAmount.push({[subs.category]: subs.price})
            }
            return null
		})

		const amounts = categoriesAmount.map(catAmt => Object.values(catAmt)).flat()
		const backgroundColors = categoriesAmount.map(catAmt => this.getRandomColor())

		const data = {
			labels: labels,
			datasets: [
				{
					data: amounts,
					backgroundColor: backgroundColors,
					hoverBackgroundColor: backgroundColors
				}
			]
		}
		return data;
    }

    render(){
        return (
            <div>
                {this.props.subscriptions ? 
                <DoughnutChart 
                    subscriptions={this.props.subscriptions}
                    data={this.data()}
                />
                :
                null}
            </div>
        )
    }
}

export default Dashboard