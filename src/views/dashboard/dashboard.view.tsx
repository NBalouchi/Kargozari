import { Box, Grid, Stack } from '@mui/material';
import Card from '../../components/common/Card';
import { SearchBox } from '../../components/SearchBox';
import BestLimit from '../bestLimit/bestLimit';
import CommonContainer from '../../components/common/Container';
import InstrumentDetail from '../InstrumentDetail/InstrumentDetail';
import Order from '../order';

export const DashboardViewRoute = () => `/dashboard`;

const DashboardView = () => {
  return (
    <CommonContainer sx={{ mt: '9rem' }}>
      <Grid container spacing={{ xl: 4, lg: 2.5 }}>
        <Grid item xs={12} lg={3} xl={2}>
          <Card maxHeight={'580px'} height={'580px'} sx={{ color: '#fff' }}>
            Instrument Watch List view
          </Card>
        </Grid>
        <Grid item xs={12} lg={9} xl={10}>
          <Stack>
            <Box mb={{ xl: 4, lg: 2.5 }}>
              <SearchBox isInstrumentSearch hasSuggestion />
            </Box>

            <Grid container spacing={{ xl: 4, lg: 2.5 }}>
              <Grid item xs={12} lg={3} xl={3}>
                <Card sx={{ height: '503px' }}>
                  <InstrumentDetail />
                </Card>
              </Grid>
              <Grid item xs={12} lg={4} xl={3}>
                <Card sx={{ height: '503px' }}>
                  <Order />
                </Card>
              </Grid>
              <Grid item xs={12} lg={5} xl={6}>
                <Stack>
                  <Card sx={{ height: '102px', color: '#fff', mb: 2.5 }}>Candle View</Card>
                  <Card minHeight={'38rem'}>
                    <BestLimit />
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </CommonContainer>
  );
};

export default DashboardView;
