import React, { useState, Fragment } from 'react'
import axios from 'axios'

const path = '/videos/'

const List_videos = () => {
const [files, set_files] = useState('')

axios.get('/file_list?dir=videos')
	.then(res => {
		set_files(res.data.file_list.reverse().map(file => (
			<a key={file} href={path+file} download>
				<video key={file} className="videos" width="50%">
				<source key={file} src={path+file} />
			</video>
			</a>
		)))
	})
return (
	<Fragment>
		{files}
	</Fragment>
)
}

export default List_videos