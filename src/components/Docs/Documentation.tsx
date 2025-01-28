import { Tab, Tabs } from '../common/Tabs/Tabs';
import { usage } from './data';

const Documentation = () => {
  return (
    <div>
      <Tabs variant="secondary" size="sm">
        {usage.map((item) => (
          <Tab
            label={item.label}
            key={item.label}
            value={item.label}
            // leftIcon={item.icon}
          >
            {item.content}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Documentation;
