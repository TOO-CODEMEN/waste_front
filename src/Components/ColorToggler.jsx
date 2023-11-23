import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../store/appSlice'

export const ColorToggler = () => {
	const dispatch = useDispatch()
	const darkMode = useSelector((state) => state.app.darkMode)

	return (
		<IconButton
			sx={{ position: 'absolute', bottom: 15, right: 15 }}
			onClick={() => dispatch(setTheme(!darkMode))}
			color='inherit'
		>
			{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	)
}
