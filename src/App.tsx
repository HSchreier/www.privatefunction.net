import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import Footer from '@/sections/Footer';
import Notifications from '@/sections/Notifications';
import SW from '@/sections/SW';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Notifications />
      <SW />
      <BrowserRouter>
        <Pages />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
