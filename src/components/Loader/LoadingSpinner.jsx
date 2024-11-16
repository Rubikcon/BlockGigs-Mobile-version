import { Vortex } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['#2F66F6', '#0A0F29', '#15BFFD', '#ffffff', '#0A0F29', '#2F66F6']}
    />
  </div>
);

export default LoadingSpinner;