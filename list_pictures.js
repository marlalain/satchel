import React, { useState, Fragment } from 'react';
import axios from 'axios';

const path = '/uploads/';

class ListaPapes extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			papes:[]
		}
	}

	componentWillMount(){
		setInterval(() => {
			axios.get('/pictures').then(res => {
				this.setState({...this.state,papes:res.data});
			});
		},3000);
	}

	render(){
		console.log('papes >',this.state.papes);
		return(
			<div>
				{
					this.state.papes.map((pape) => {
							return(
								<img src={path+pape}/>
							)
						}
					)
				}
			</div>
		)
	}
}

export default ListaPapes;