/// <reference types="react" />
import scrollIntoView from './scrollView';
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
declare const IndexBar: React.FC<IndexBarProps> & {
  minHeight: number;
};
export { scrollIntoView };
export default IndexBar;
