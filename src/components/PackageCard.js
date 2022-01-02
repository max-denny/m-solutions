import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const PackageCard = () => {

    return(
        <div>
                <Card >
                    <CardMedia style={{height: 80, paddingTop: '1px'}}
                    // image={''}
                    title={'Basic Package'}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h1">
                        {'Package Card'}
                    </Typography>
                    <Typography component="h2">
                        {'Basic Package'}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        Request Package
                    </Button>
                    </CardActions>
                </Card>
            
        </div>
    )
}

export default PackageCard
