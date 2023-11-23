import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { formatFileSize } from './fileSize'

function App() {
	const [highlight, setHighlight] = useState(false)
	const [file, setFile] = useState(null)

	const handleDragOver = (e) => {
		e.preventDefault()
		setHighlight(true)
	}

	const handleDragLeave = () => {
		setHighlight(false)
	}

	const handleDrop = (e) => {
		e.preventDefault()
		setHighlight(false)

		const droppedFile = e.dataTransfer.files[0]
		if (droppedFile) {
			setFile(droppedFile)
		}
	}

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0]
		if (selectedFile) {
			setFile(selectedFile)
		}
	}

	return (
		<Box
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			sx={{
				border: highlight && '5px dashed',
				borderColor: 'primary.main',
				margin: '20px',
				textAlign: 'center',
			}}
			minHeight='calc(100vh - 40px)'
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
			component='form'
		>
			{highlight ? (
				<Typography color='primary.main' fontSize='330px'>
					+
				</Typography>
			) : (
				<Stack direction='row' spacing={1}>
					<Button
						startIcon={<AttachFileIcon />}
						variant='outlined'
						component='label'
						size='large'
					>
						{file ? (
							<Stack direction='row' spacing={5}>
								<Typography variant='subtitle1'>
									{file.name}
								</Typography>
								<Typography variant='subtitle1'>
									{formatFileSize(file.size)}
								</Typography>
							</Stack>
						) : (
							'Выберите или перетащите файл для загрузки'
						)}
						<input
							accept='*'
							hidden
							id='file-upload'
							type='file'
							onChange={handleFileChange}
						/>
					</Button>
					<Button
						disabled={file ? false : true}
						variant='contained'
						type='submit'
					>
						Загрузить
					</Button>
				</Stack>
			)}
		</Box>
	)
}

export default App
