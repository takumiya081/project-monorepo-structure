import {zodResolver} from '@hookform/resolvers/zod';
import {UseFormProps, useForm} from 'react-hook-form';
import {z} from 'zod';

type UseFormWithZodProps<Schema extends z.AnyZodObject> = {
  schema: Schema;
} & Omit<UseFormProps, 'resolver'>;

export function useFormWithZod<Schema extends z.AnyZodObject>({
  schema,
  ...props
}: UseFormWithZodProps<Schema>) {
  return useForm({
    resolver: zodResolver(schema),
    ...props,
  });
}
