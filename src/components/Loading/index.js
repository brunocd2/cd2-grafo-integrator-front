import ReactLoading from 'react-loading';

export default function Loading({ isLoading }) {
  return <ReactLoading type={isLoading ? "spinningBubbles" : 'blank'} color="#4E73DF" width={50} />
}