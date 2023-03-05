import './Content.css'
import Box from '@mui/material/Box'
import Hero from './assets/img/hero.png'

const Content = () => {
    return (
        <Box component='main'>
            <div>
                <h1>Olá seja bem vindo ao site!!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus turpis massa tincidunt dui. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nisl tincidunt eget nullam non. Ut lectus arcu bibendum at varius. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Amet purus gravida quis blandit turpis. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Consequat ac felis donec et.</p>
                <a className='btn'>Redes Sociais</a>
                <a className='btn'>Sobre-nós</a>
            </div>
            <img src={Hero} />

        </Box>
    )
}

export default Content