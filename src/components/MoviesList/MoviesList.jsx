import styles from './MoviesList.module.css';
import { Btn } from '../Buttons/Btn';

function MoviesList({ children, page, setPage }) {
  const loadMore = () => {
    page += 1;
    setPage(page);
    console.log(page);
  };
  return (
    <>
      <ul className={styles.movieList}>{children}</ul>
      <div className={styles.btnWrapper}>
        <Btn text="load more" onClick={loadMore} />
      </div>
    </>
  );
}

export default MoviesList;
