import { RotatingLines } from 'react-loader-spinner';
import Container from '../container/Container';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <Container>
      <div className={s.loader}>
        <RotatingLines ariaLabel="loading" />
      </div>
    </Container>
  );
}
