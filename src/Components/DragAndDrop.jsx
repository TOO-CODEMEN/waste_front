import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'

export const DragAndDrop = ({ children, setFile }) => {
	const [highlight, setHighlight] = useState(false)

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

	return (
		<Box
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
			sx={{
				border: highlight && '5px dashed',
				borderColor: 'primary.main',
				margin: '20px',
				display: 'flex',
				flexDirection: 'column'
			}}
			minHeight='calc(100vh - 40px)'
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			{highlight ? (
				<Typography color='primary.main' fontSize='330px'>
					+
				</Typography>
			) : (
				<>{children}</>
			)}
		</Box>
	)
}
