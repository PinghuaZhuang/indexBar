import { useMemo, useCallback, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { IndexBarProps } from './index';
import styles from './style.module.less';

export type LetterBarProps = Pick<
  IndexBarProps,
  'onChange' | 'className' | 'onLeave'
> & {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

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
  } = props;
  const isMouseDownRef = useRef(false);

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
      letters.split('').map((letter, index) => (
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
      )),
    [onLetterClick, onLetterHover],
  );

  useEffect(() => {
    document.body.addEventListener('onmouseup', onMouseUp);
    return () => {
      document.body.removeEventListener('onmouseup', onMouseUp);
    };
  }, []);

  return (
    <div
      className={classNames(`index-bar`, className, styles.letterBar)}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {lettersNode}
    </div>
  );
};

export default LetterBar;
