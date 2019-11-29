const express = require('express')
const file_upload = require('express-fileupload')

const app = express()
app.use(file_upload())

app.post('/uploads', (req, res) => {
	if (req.files === null) {
		return res.status(400).json({
			msg: 'No file uploaded.'
		})
	}

	const file = req.files.file
	file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
		if (err) {
			console.error(err)
			return res.status(500).send(err)
		}

		res.json({
			file_name: file.name,
			file_path: `/uploads/${file.name}`
		})
	})
})

app.listen(5000, () => console.log('Server started...'))