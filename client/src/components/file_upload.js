import React, { Fragment, useState } from 'react'
import axios from 'axios'

const File_upload = () => {
	const [file, set_file] = useState('')
	const [file_name, set_file_name] = useState('')
	const [uploaded_file, set_uploaded_file] = useState({})

	const on_change = e => {
		set_file(e.target.files[0])
		set_file_name(e.target.files[0].name)
	}

	const on_submit = async e => {
		e.preventDefault()
		const form_data = new FormData()
		form_data.append('file', file)

		try {
			const res = await axios.post('/uploads', form_data, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			const { file_name, file_path } = res.data
			set_uploaded_file({ file_name, file_path })
		} catch(err) {
			if (err.response.status === 500) {
				console.log('There was a problem with the server');
			} else {
				console.log(err.response.data.msg)
			}
		}
	}

  return (
    <Fragment>
        <form onSubmit={on_submit}>
          <div className="form">
						<input onChange={on_change} type="file" id="custom_file" />
						<input type="submit" id="submit_btn" />
          </div>
				</form>
				{ uploaded_file ? <div className="">
					<p>{uploaded_file.file_name}</p>
					<img style={{ width: '100%' }} src={uploaded_file.file_path} alt={uploaded_file.file_name} />
				</div> : null
				}
    </Fragment>
	)
}

export default File_upload