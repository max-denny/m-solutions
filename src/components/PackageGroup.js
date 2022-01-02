import Grid from '@material-ui/core/Grid';

import PackageCard from './PackageCard';

const PackageGroup = () => {
    return (
        <div>
            <Grid container spacing={4} style={{padding: 4}}>
                    <Grid item xs={4} sm={6} lg={4} xl={3}>
                        <PackageCard />
                    </Grid>
                    <Grid item xs={4} sm={6} lg={4} xl={3}>
                        <PackageCard />
                    </Grid>
                    <Grid item xs={4} sm={6} lg={4} xl={3}>
                        <PackageCard />
                    </Grid>
            </Grid>
        </div>
    )}
            
        

export default PackageGroup
