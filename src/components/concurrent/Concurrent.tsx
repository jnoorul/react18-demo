import { useState } from 'react';
import ButtonGroup, { ButtonOption } from '../common/ButtonGroup';
import { WithTransition } from './WithTransition';
import { WithDeferred } from './WithDeferred';
import { FakeLoader } from '../common/FakeLoader';

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
    <div className="my-8">
      <ButtonGroup
        options={options}
        onSelect={(value: TabName) => setActiveTab(value)}
        activeTab={activeTab}
      />
      <FakeLoader tabName={activeTab}>
        {activeTab === 'useTransition' && <WithTransition />}
        {activeTab === 'useDeferred' && <WithDeferred />}
      </FakeLoader>
    </div>
  );
}
