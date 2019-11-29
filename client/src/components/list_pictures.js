import React, { useState, Fragment } from 'react'
import axios from 'axios'

const path = '/uploads/'

const List_pictures = () => {
	const [files, set_files] = useState('')

	axios.get('/pictures')
		.then(res => {
			let temp_list = res.data.file_list
			let files = temp_list.map(file => (
				<img style={{width: '100%'}} src={path+file} />
			))
			set_files(files)
			
		})
	return (
		<Fragment>
			{files}
		</Fragment>
	)
}

export default List_pictures