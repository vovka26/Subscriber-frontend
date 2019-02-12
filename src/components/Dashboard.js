import React, { PureComponent, Fragment } from 'react'
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart'
import '../Dashboard.css'
import { Checkbox } from 'semantic-ui-react'

class Dashboard extends PureComponent {
	state = {
		checked: false
	}

	handleSliderChange = () => {
		this.setState({ checked: !this.state.checked })
	}

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
			} else {
				labels.push(subs.category)
				categoriesAmount.push({ [subs.category]: subs.price })
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

	render() {
		if (this.props.subscriptions) {
			return (
				<Fragment>
					<div className='ui grid centered'>
						Bar Chart
						<Checkbox
							className='slider'
							slider
							checked={this.state.checked}
							onClick={this.handleSliderChange}
						/>
						Doughnut Chart
					</div>
					{this.state.checked ?
						<DoughnutChart
							subscriptions={this.props.subscriptions}
							data={this.data()}
						/>
						:
						<BarChart
							subscriptions={this.props.subscriptions}
							data={this.data()}
						/>
					}
				</Fragment>
			)
		} else {
			return null
		}

	}
}

export default Dashboard