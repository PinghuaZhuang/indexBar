/// <reference types="react" />
import { IndexBarProps } from './index';
export declare type LetterBarProps = Pick<
  IndexBarProps,
  'onChange' | 'className' | 'onLeave' | 'letters' | 'left' | 'right'
> & {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const LetterBar: React.FC<LetterBarProps>;
export default LetterBar;
