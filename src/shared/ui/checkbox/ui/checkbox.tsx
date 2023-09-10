import { forwardRef } from 'react';
import { useState } from 'react';

import classes from './checkbox.module.sass';
import { CheckboxValue } from '../lib/types';

type CheckboxProps = {
  state: boolean;
}

export const Checkbox = forwardRef((props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const [value, setValue] = useState<CheckboxValue>(props.state ? 'complete' : 'empty');

    const onCheckboxClick = () => {
      setValue((value) => {
        switch (value) {
          case 'empty':
            return 'complete';
          case 'complete':
            return 'remove';
          case 'remove':
            return 'empty';
        }
      });
    }

    return (
      <>
        <input ref={ref} type='text' value={value} className={classes.visuallyHidden} readOnly />
        
        <div className={classes.checkbox} onClick={onCheckboxClick}>
          {
            value !== 'empty' &&
            <img
              height={14}
              width={14}
              src={`/img/checkbox/${value}.svg`}
              className={classes.checkboxSprite}
            />
          }
        </div>
      </>
    )
  }
); 

