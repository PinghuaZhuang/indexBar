import { useCallback, useState } from 'react';
import scrollIntoView from './scrollView';
import classNames from 'classnames';
import LetterBar from './LetterBar';
import LetterBox from './LetterBox';
import styles from './style.module.less';

export interface IndexBarProps {
  className?: string;
  children?: React.ReactNode;
  value?: string;
  letters?: string | string[];
  right?: number | string;
  left?: number | string;
  onChange?: (letter: string, index: number) => void;
  onLeave?: () => void;
}

const clickStop: React.MouseEventHandler<HTMLDivElement> = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const IndexBar: React.FC<IndexBarProps> & {
  minHeight: number;
} = (props) => {
  const {
    children,
    className,
    onChange: userOnChange,
    value,
    onLeave,
    letters,
    left,
    right,
  } = props;

  const [letter, setLetter] = useState(value);
  const [visible, setVisible] = useState(false);

  const onChange = useCallback<Required<IndexBarProps>['onChange']>(
    (letter, index) => {
      setLetter(letter);
      userOnChange && userOnChange(letter, index);
    },
    [userOnChange],
  );

  return (
    <div
      className={classNames(`index-bar`, className, styles.indexBarContainer)}
      onClick={clickStop}
    >
      <LetterBar
        left={left}
        right={right}
        letters={letters}
        onChange={onChange}
        onLeave={onLeave}
        setVisible={setVisible}
      />
      <LetterBox visible={visible} letter={value ?? letter} />
      {children}
    </div>
  );
};

IndexBar.minHeight = 600;

export { scrollIntoView };

export default IndexBar;
