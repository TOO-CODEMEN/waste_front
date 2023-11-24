import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import { formatFileSize } from '../utils/fileSize'
import { useDispatch } from 'react-redux'
import { filesApi } from '../api/file'

export const UploadInput = ({ fileBlob, setFile }) => {
	const dispatch = useDispatch()
	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0]
		if (selectedFile) {
			setFile({
				blob: selectedFile,
				URL: URL.createObjectURL(selectedFile),
			})
			dispatch(filesApi.util.resetApiState())
		}
	}

	return (
		<Button
			startIcon={<AttachFileIcon />}
			variant='outlined'
			component='label'
			size='large'
		>
			{fileBlob ? (
				<Stack direction='row' spacing={5}>
					<Typography variant='subtitle1'>{fileBlob.name}</Typography>
					<Typography variant='subtitle1'>
						{formatFileSize(fileBlob.size)}
					</Typography>
				</Stack>
			) : (
				'Выберите или перетащите файл для загрузки'
			)}
			<input
				accept='image/png, image/jpeg, video/*'
				hidden
				id='file-upload'
				type='file'
				onChange={handleFileChange}
			/>
		</Button>
	)
}
