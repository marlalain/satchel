const express = require('express')
const file_upload = require('express-fileupload')
const fs = require('fs')

const app = express()
app.use(file_upload())

app.get('/file_list', (req, res) => {
	let directory = `client/public/${req.param('dir')}/`
	let files = fs.readdirSync(directory)

	return res.json({
		file_list: files
	})
})

app.post('/uploads', (req, res) => {
	if (req.files === null) {
		return res.status(400).json({
			msg: 'No file uploaded.'
		})
	}

	const file = req.files.file
	console.log(file.mimetype)
	let dir

	if (file.mimetype.includes("image")) {
		dir = "pictures"
	} else if (file.mimetype.includes("video")) {
		dir = "videos"
	} else if (file.mimetype.includes("music")) {
		dir = "musics"
	} else {
		dir = "documents"
	}

	file.mv(`${__dirname}/client/public/${dir}/${file.name}`, err => {
		if (err) {
			console.error(err)
			return res.status(500).send(err)
		}

		res.json({
			file_name: file.name,
			file_path: `/${dir}/${file.name}`
		})
	})
})

app.listen(5000, () => console.log('Server started...'))