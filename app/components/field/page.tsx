import { Metadata } from 'next';

import { Section } from '@/components/shared/section';
import { Component } from '@/app/components/_components/component';
import { ComponentInstallation } from '@/app/components/_components/component-installation';

export const metadata: Metadata = {
  title: 'Form Field',
  description:
    'Wrapper over the shadcn/ui FormField to simplify working with it.',
};

export default function FieldPage() {
  return (
    <Component
      shortHeading='field'
      heading='Form Field'
      description='Wrapper over the shadcn/ui FormField to simplify working with it.'
      links={[
        {
          heading: 'Base Component',
          href: 'https://ui.shadcn.com/docs/components/form',
        },
        {
          heading: 'Docs',
          href: 'https://react-hook-form.com/',
        },
      ]}
    >
      <Section heading='Installation'>
        <ComponentInstallation
          shadcnDependencies={['form']}
          componentFileName='form-field.tsx'
        />
      </Section>
    </Component>
  );
}
