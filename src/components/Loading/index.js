import ReactLoading from 'react-loading';

export default function Loading({ isLoading, size }) {
  return <ReactLoading type={isLoading ? "spinningBubbles" : 'blank'} color="#4E73DF" width={size || 50} />
}