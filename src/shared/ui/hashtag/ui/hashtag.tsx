import classes from './hashtag.module.sass';

type HashtagProps = {
  text: string,
  type: 'regular' | 'highlight' | 'pointed',
}

export const Hashtag = ({text, type}: HashtagProps): JSX.Element => {
  return (
    <div className={classes[type]}>{text}</div>
  )
};
