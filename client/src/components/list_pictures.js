import React, { useState, Fragment } from 'react'
import axios from 'axios'

const path = '/uploads/'

const List_pictures = () => {
	const [files, set_files] = useState('')

	axios.get('/pictures')
		.then(res => {
			set_files(res.data.file_list.map(file => (
				<a download={file} title={file} href={path+file}>
					<img style={{width: '50%'}} src={path+file} /></a>
			)))			
		})
	return (
		<Fragment>
			{files}
		</Fragment>
	)
}

export default List_pictures