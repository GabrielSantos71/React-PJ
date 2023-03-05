import './Header.css'
import Box from '@mui/material/Box'

const Header = () => {
    return (
        <Box component='header'>
            <h3>Logo</h3>
            <Box component='options'>
                <a>Home</a>
                <a>Sobre</a>
                <a>Contato</a>
            </Box>
            <button>Login</button>
        </Box>
    )
}

export default Header