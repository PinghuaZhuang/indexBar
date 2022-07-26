import { useMemo, useCallback, useRef, useEffect } from 'react';
import classNames from 'classnames';
import uniq from 'lodash/uniq';
import sortBy from 'lodash/sortBy';
import { IndexBarProps } from './index';
import styles from './style.module.less';

export type LetterBarProps = Pick<
  IndexBarProps,
  'onChange' | 'className' | 'onLeave' | 'letters'
> & {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

interface lettersMap {
  [P: string]: { letter: string; index: number };
}

const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const lettersMap: lettersMap = letters
  .split('')
  .reduce((map, letter: string, index) => {
    map[letter] = {
      letter,
      index,
    };
    return map;
  }, {} as lettersMap);

interface openBoxImp {
  (asyncClose?: boolean): void;
  timer?: number;
}

const LetterBar: React.FC<LetterBarProps> = (props) => {
  const {
    className,
    onChange: userOnChange,
    onLeave: userOnLeave,
    setVisible,
    letters: userLetters,
  } = props;
  const isMouseDownRef = useRef(false);
  const mergeLetters = useMemo(
    () =>
      sortBy(
        uniq(
          typeof userLetters === 'string' ? userLetters.split('') : userLetters,
        ),
      )
        .map((o) => o?.toUpperCase())
        .filter((o) => lettersMap[o]) ?? letters.split(''),
    [userLetters],
  );

  const closeBox = useCallback(() => {
    setVisible(false);
  }, []);

  const openBox: openBoxImp = useCallback((asyncClose) => {
    setVisible(true);
    if (asyncClose) {
      clearTimeout(openBox.timer);
      openBox.timer = setTimeout(closeBox, 300 * 2);
    }
  }, []);

  const onMouseDown = useCallback(() => {
    isMouseDownRef.current = true;
  }, []);

  const onMouseUp = useCallback(() => {
    isMouseDownRef.current = false;
    closeBox();
    userOnLeave && userOnLeave();
  }, [userOnLeave]);

  const onMouseLeave = useCallback(() => {
    closeBox();
  }, []);

  const onLetterClick = useCallback<Required<LetterBarProps>['onChange']>(
    (letter, index) => {
      openBox();
      userOnChange && userOnChange(letter, index);
    },
    [userOnChange],
  );

  const onLetterHover = useCallback<Required<LetterBarProps>['onChange']>(
    (letter, index) => {
      if (!isMouseDownRef.current) return;
      openBox();
      userOnChange && userOnChange(letter, index);
    },
    [userOnChange],
  );

  const lettersNode = useMemo(
    () =>
      letters.split('').map((letter: string) => {
        const index = lettersMap[letter.toUpperCase()].index;
        return (
          <span
            key={letter}
            className={styles.letter}
            onClick={() => onLetterClick(letter, index)}
            onMouseEnter={() => onLetterHover(letter, index)}
            // onMouseDown={openBox}
            // onMouseUp={closeBox}
          >
            {letter}
          </span>
        );
      }),
    [onLetterClick, onLetterHover, mergeLetters],
  );

  useEffect(() => {
    document.body.addEventListener('onmouseup', onMouseUp);
    return () => {
      document.body.removeEventListener('onmouseup', onMouseUp);
    };
  }, []);

  return mergeLetters.length ? (
    <div
      className={classNames(`index-bar`, className, styles.letterBar)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {lettersNode}
    </div>
  ) : null;
};

export default LetterBar;
