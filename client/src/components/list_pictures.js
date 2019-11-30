import React, { useState, Fragment } from 'react'
import axios from 'axios'

const path = '/uploads/'

const List_pictures = () => {
	const [files, set_files] = useState('')

	axios.get('/pictures')
		.then(res => {
			set_files(res.data.file_list.reverse().map(file => (
				<a key={file} download={file} title={file} href={path+file}>
					<img key={file} style={{width: '50%'}} src={path+file} /></a>
			)))
		})
	return (
		<Fragment>
			{files}
		</Fragment>
	)
}

export default List_pictures