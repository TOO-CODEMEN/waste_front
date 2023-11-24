import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { DragAndDrop } from './Components/DragAndDrop'
import { UploadInput } from './Components/UploadInput'
import { useEffect, useState } from 'react'
import { usePostFileMutation } from './api/file'
import { dataNames } from './data/data'
import { Result } from './Components/Result'

function App() {
	const [file, setFile] = useState(null)
	const [postFile, { isLoading, data, isError }] = usePostFileMutation()
	const [image, setImage] = useState()

	const fileReader = new FileReader()
	fileReader.onloadend = () => {
		setImage(fileReader.result)
	}


	const onSubmitHandler = async (e) => {
		e.preventDefault()
		const form = new FormData()
		form.append('file', file)
		await postFile(form)
		fileReader.readAsDataURL(file)
	}

	return (
		<div>
			<DragAndDrop setFile={setFile}>
				<Box component='form'>
					<Stack direction='row' spacing={1}>
						<UploadInput file={file} setFile={setFile} />
						<Button
							disabled={file ? false : true}
							variant='contained'
							onClick={onSubmitHandler}
						>
							Загрузить
						</Button>
					</Stack>
				</Box>
				<Box>
					<Result
						isError={isError}
						isFetching={isLoading}
						data={data}
						image={image}
					/>
				</Box>
			</DragAndDrop>
		</div>
	)
}

export default App
