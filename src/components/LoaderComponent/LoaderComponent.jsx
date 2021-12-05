import Loader from 'react-loader-spinner';
import './LoaderComponent.scss';

export default function LoaderComponent() {
  return (
    <Loader
      className="loader"
      type="Audio"
      color="#00BFFF"
      height={200}
      width={200}
    />
  );
}
