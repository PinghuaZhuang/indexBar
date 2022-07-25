import classNames from 'classnames';
import styles from './style.module.less';
import LetterBar from './LetterBar';

export interface IndexBarProps {
  className?: string;
  children?: React.ReactNode;
}

const clickStop: React.MouseEventHandler<HTMLDivElement> = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const IndexBar: React.FC<IndexBarProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={classNames(`index-bar`, className, styles.indexBarContainer)}
      onClick={clickStop}
    >
      <LetterBar />
      {children}
    </div>
  );
};

export default IndexBar;
