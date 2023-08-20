import { useState } from 'react';
import ButtonGroup, { ButtonOption } from '../common/ButtonGroup';
import { ConcurrentWithTransition } from './ConcurrentWithTransition';

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
      {activeTab === 'useTransition' && <ConcurrentWithTransition />}
    </div>
  );
}
