import React, { useState, Fragment } from 'react'
import axios from 'axios'

const path = '/videos/'

const List_videos = () => {
	const [files, set_files] = useState('')

	axios.get('/file_list?dir=videos')
		.then(res => {
			set_files(res.data.file_list.reverse().map(file => (
				<a key={file} download={file} title={file} href={path+file}>
					<img key={file} className="videos" src={path+file} /></a>
			)))
		})
	return (
		<Fragment>
			{files}
		</Fragment>
	)
}

export default List_videos