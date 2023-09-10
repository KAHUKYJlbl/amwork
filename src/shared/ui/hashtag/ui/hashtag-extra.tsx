import classes from './hashtag-extra.module.sass';

type HashtagExtraProps = {
  count: number,
};

export const HashtagExtra = ({count}: HashtagExtraProps): JSX.Element => {
  return (
    <div className={classes.extra}>+{count}</div>
  )
};
