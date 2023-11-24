import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { formatFileSize } from '../utils/fileSize'

export const UploadInput = ({ file, setFile }) => {
	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0]
		if (selectedFile) {
			setFile(selectedFile)
			console.log(selectedFile)
		}
	}

	return (
		<Button
			startIcon={<AttachFileIcon />}
			variant='outlined'
			component='label'
			size='large'
		>
			{file ? (
				<Stack direction='row' spacing={5}>
					<Typography variant='subtitle1'>{file.name}</Typography>
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
	)
}
