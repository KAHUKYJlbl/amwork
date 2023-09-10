import classes from './button.module.sass';

type ButtonProps = {
  type: 'plus' | 'count',
  data?: string,
};

export const Button = ({type, data}: ButtonProps): JSX.Element => {
  return (
    <div className={classes[type]}>
      {data || '+'}
    </div>
  )
};
