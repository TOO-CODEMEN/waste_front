import CssBaseline from '@mui/material/CssBaseline'
import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ColorToggler } from './ColorToggler'

export const DarkTheme = ({ children }) => {
	const darkMode = useSelector((state) => state.app.darkMode)

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	})
	return (
		<ThemeProvider theme={darkMode && darkTheme}>
			<CssBaseline />
			{children}
			<ColorToggler />
		</ThemeProvider>
	)
}
