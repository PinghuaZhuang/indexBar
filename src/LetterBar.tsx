import { useMemo } from 'react';
import classNames from 'classnames';
import styles from './style.module.less';

export interface LetterBarProps {
  className?: string;
}

const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

const LetterBar: React.FC<LetterBarProps> = (props) => {
  const { className } = props;
  const lettersNode = useMemo(
    () =>
      letters
        .split('')
        .map((letter) => <span className={styles.letter}>{letter}</span>),
    [],
  );

  return (
    <div className={classNames(`index-bar`, props.className, styles.letterBar)}>
      {lettersNode}
    </div>
  );
};

export default LetterBar;
