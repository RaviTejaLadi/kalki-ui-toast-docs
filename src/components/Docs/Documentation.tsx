import { Tab, Tabs } from 'kalki-ui';
import { usage } from './data';

const Documentation = () => {
  return (
    <div>
      <Tabs variant="secondary" size="sm" className="docs-card rounded-xl p-4 sm:p-5">
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
