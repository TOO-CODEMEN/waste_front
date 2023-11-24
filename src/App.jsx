import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { DragAndDrop } from './Components/DragAndDrop'
import { UploadInput } from './Components/UploadInput'
import { useState } from 'react'

function App() {
	const [file, setFile] = useState(null)

	return (
		<DragAndDrop setFile={setFile}>
			<Box component='form'>
				<Stack direction='row' spacing={1}>
					<UploadInput file={file} setFile={setFile} />
					<Button
						disabled={file ? false : true}
						variant='contained'
						type='submit'
					>
						Загрузить
					</Button>
				</Stack>
			</Box>
		</DragAndDrop>
	)
}

export default App
