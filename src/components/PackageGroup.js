import Grid from '@material-ui/core/Grid';

import PackageCard from './PackageCard';

const PackageGroup = () => {
    return (
        <div>
            <Grid container spacing={24} style={{padding: 24}}>
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <PackageCard />
                    </Grid>
            </Grid>
        </div>
    )}
            
        

export default PackageGroup
