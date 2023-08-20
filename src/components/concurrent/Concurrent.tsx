import { useState } from 'react';
import ButtonGroup, { ButtonOption } from '../common/ButtonGroup';
import { WithTransition } from './WithTransition';
import { WithDeferred } from './WithDeferred';

export type TabName = 'useTransition' | 'useDeferred';

export function Concurrent() {
  const [activeTab, setActiveTab] = useState<TabName>('useTransition');
  const options: ButtonOption[] = [
    {
      label: 'Use Transition',
      value: 'useTransition',
    },
    {
      label: 'Use Deferred',
      value: 'useDeferred',
    },
  ];

  return (
    <div>
      <ButtonGroup
        options={options}
        onSelect={(value: TabName) => setActiveTab(value)}
        activeTab={activeTab}
      />
      {activeTab === 'useTransition' && <WithTransition />}
      {activeTab === 'useDeferred' && <WithDeferred />}
    </div>
  );
}
