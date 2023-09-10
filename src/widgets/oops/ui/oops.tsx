import { Navigate } from 'react-router-dom';

import { AppRoute } from '../../../app/provider/router';

import classes from './oops.module.sass';

type OopsProps = {
  type: 'todos' | 'error-boundary';
  arg?: string;
}

export function Oops({type, arg = 'null'}: OopsProps): JSX.Element {
  const handleOopsClick = () => {
    switch (type) {
      case 'todos':
        // dispatch(fetchCatalog());
        break;
      case 'error-boundary':
        return <Navigate to={AppRoute.Main} />;
    }
  };

  return (
    <div className={classes.containeroops} onClick={handleOopsClick}>
      <figure className={classes.figureoops}>
        <figcaption className={classes.figcaptionoops} title="Try again">
          <span className={classes.o}></span>
          <span className={classes.o}></span>
          <span className={classes.p}></span>
          <span className={classes.s}></span>
          <span className={classes.wow}></span>
        </figcaption>
      </figure>
    </div>
  );
}
