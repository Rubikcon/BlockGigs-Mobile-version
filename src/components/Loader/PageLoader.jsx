import { Vortex } from 'react-loader-spinner';
import './style.css';

const PageLoader = () => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[rgba(255,255,255,0.8)] z-[55] flex items-center justify-center'>
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
};

export default PageLoader;