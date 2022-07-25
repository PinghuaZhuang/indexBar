import classNames from 'classnames';
import styles from './style.module.less';

export interface LetterBoxProps {
  letter?: string;
  visible: boolean;
}

const LetterBox: React.FC<LetterBoxProps> = (props) => {
  const { letter, visible } = props;

  return (
    <div
      className={classNames(
        styles.letterBox,
        styles.animate,
        visible ? styles.fadeIn : styles.fadeOut,
      )}
    >
      {letter}
    </div>
  );
};

export default LetterBox;
