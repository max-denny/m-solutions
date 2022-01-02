import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
    return(
        <div>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Market Solutions
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Navbar;