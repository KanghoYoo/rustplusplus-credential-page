import { ReactNode } from 'react';
import styles from './terminalBlock.module.css';

interface TerminalBlockProps {
  children: ReactNode;
}

const TerminalBlock = ({ children }: TerminalBlockProps) => {
  return (
    <pre className={styles.pre}>
      <code>{children}</code>
    </pre>
  );
};

export default TerminalBlock;
