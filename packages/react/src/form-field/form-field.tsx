import * as React from 'react';
import {
  createContext,
  useContext,
  useId,
  useMemo,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from 'react';
import { clsx } from 'clsx';

import { VisuallyHidden } from '../visually-hidden';
import styles from './form-field.module.css';

type FormFieldContextValue = {
  fieldId: string;
  descriptionId: string;
  errorId: string;
};

const FormFieldContext = createContext<FormFieldContextValue | null>(null);

function useFormFieldContext(component: string) {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error(`${component} must be used within <FormField>.`);
  }
  return context;
}

export type FormFieldProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};

function FormFieldRoot({ className, children, ...props }: FormFieldProps) {
  const fieldId = useId();
  const descriptionId = `${fieldId}-description`;
  const errorId = `${fieldId}-error`;
  const contextValue = useMemo(
    () => ({ fieldId, descriptionId, errorId }),
    [fieldId, descriptionId, errorId]
  );

  return (
    <FormFieldContext.Provider value={contextValue}>
      <div className={clsx(styles.root, className)} {...props}>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
}

export type FormFieldLabelProps = ComponentPropsWithoutRef<'label'> & {
  children: ReactNode;
  required?: boolean;
};

function FormFieldLabel({ className, children, required, htmlFor, ...props }: FormFieldLabelProps) {
  const { fieldId } = useFormFieldContext('FormField.Label');

  return (
    <label htmlFor={htmlFor ?? fieldId} className={clsx(styles.label, className)} {...props}>
      {children}
      {required ? (
        <>
          <span aria-hidden="true" className={styles.required}>
            {' '}
            *
          </span>
          <VisuallyHidden>required</VisuallyHidden>
        </>
      ) : null}
    </label>
  );
}

export type FormFieldLabelRowProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};

function FormFieldLabelRow({ className, children, ...props }: FormFieldLabelRowProps) {
  return (
    <div className={clsx(styles.labelRow, className)} {...props}>
      {children}
    </div>
  );
}

export type FormFieldLabelActionsProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};

function FormFieldLabelActions({ className, children, ...props }: FormFieldLabelActionsProps) {
  return (
    <div className={clsx(styles.labelActions, className)} {...props}>
      {children}
    </div>
  );
}

export type FormFieldDescriptionProps = ComponentPropsWithoutRef<'p'> & {
  children: ReactNode;
};

function FormFieldDescription({ className, children, id, ...props }: FormFieldDescriptionProps) {
  const { descriptionId } = useFormFieldContext('FormField.Description');

  return (
    <p id={id ?? descriptionId} className={clsx(styles.description, className)} {...props}>
      {children}
    </p>
  );
}

export type FormFieldErrorProps = ComponentPropsWithoutRef<'p'> & {
  children?: ReactNode;
};

function FormFieldError({ className, children, id, ...props }: FormFieldErrorProps) {
  const { errorId } = useFormFieldContext('FormField.Error');

  if (children === undefined || children === null || children === '') {
    return null;
  }

  return (
    <p id={id ?? errorId} role="alert" className={clsx(styles.error, className)} {...props}>
      {children}
    </p>
  );
}

export type FormFieldControlProps = {
  children: ReactElement<{ id?: string; 'aria-describedby'?: string }>;
  describedBy?: 'description' | 'error' | 'both' | 'none';
};

function FormFieldControl({ children, describedBy = 'description' }: FormFieldControlProps) {
  const { fieldId, descriptionId, errorId } = useFormFieldContext('FormField.Control');

  const ariaDescribedBy = (() => {
    if (describedBy === 'none') return undefined;
    if (describedBy === 'description') return descriptionId;
    if (describedBy === 'error') return errorId;
    return `${descriptionId} ${errorId}`;
  })();

  return React.cloneElement(children, {
    id: children.props.id ?? fieldId,
    'aria-describedby': ariaDescribedBy,
  });
}

const FormField = Object.assign(FormFieldRoot, {
  Label: FormFieldLabel,
  LabelRow: FormFieldLabelRow,
  LabelActions: FormFieldLabelActions,
  Description: FormFieldDescription,
  Error: FormFieldError,
  Control: FormFieldControl,
});

export { FormField };
