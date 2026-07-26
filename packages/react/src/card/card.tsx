import * as React from 'react';
import { clsx } from 'clsx';

import styles from './card.module.css';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card" className={clsx(styles.card, className)} {...props} />;
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-header" className={clsx(styles.header, className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3 data-slot="card-title" className={clsx(styles.title, className)} {...props}>
      {props.children}
    </h3>
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p data-slot="card-description" className={clsx(styles.description, className)} {...props} />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-action" className={clsx(styles.action, className)} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={clsx(styles.content, className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-footer" className={clsx(styles.footer, className)} {...props} />;
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
