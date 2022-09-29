import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import OffsetLoader from './components/offset';
import OverlayLoader from './components/overlay';

export enum LoaderType {
    OVERLAY = 'overlay',
    OFFSET = 'offset',
    DEFAULT = 'default',
  }
  
  interface Props {
    type?: LoaderType
  }

  const Loader = ({ type = LoaderType.OFFSET }: Props) => {
    switch (type) {
      case LoaderType.OFFSET:
        return (
         <OffsetLoader />
        )
      case LoaderType.OVERLAY:
        return (
         <OverlayLoader />
        )
      case LoaderType.DEFAULT:
      default:
        return <CircularProgress />
    }
  }


export default Loader;