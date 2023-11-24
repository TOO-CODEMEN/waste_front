import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { DragAndDrop } from './Components/DragAndDrop'
import { UploadInput } from './Components/UploadInput'
import { useState } from 'react'
import { usePostFileMutation } from './api/file'
import { Result } from './Components/Result'

function App() {
	const [file, setFile] = useState({})
	const [postFile, { isLoading, data, isError }] = usePostFileMutation()

	const onSubmitHandler = async (e) => {
		e.preventDefault()
		const form = new FormData()
		form.append('file', file.blob)
		await postFile(form)
	}

	return (
		<div>
			<DragAndDrop setFile={setFile}>
				<Stack
					component='form'
					direction='row'
					gap={2}
					justifyContent='center'
					flexWrap='wrap'
				>
					<UploadInput fileBlob={file.blob} setFile={setFile} />
					<Button
						disabled={file ? false : true}
						variant='contained'
						onClick={onSubmitHandler}
					>
						Загрузить
					</Button>
				</Stack>
				<Box>
					<Result
						isError={isError}
						isFetching={isLoading}
						data={data}
						fileURL={file.URL}
						fileBlob={file.blob}
					/>
				</Box>
			</DragAndDrop>
		</div>
	)
}

export default App
