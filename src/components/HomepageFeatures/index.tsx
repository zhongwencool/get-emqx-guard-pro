import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🛡️ Stays Ahead of Trouble',
    Svg: require('@site/static/img/stays-ahead-of-trouble.svg').default,
    description: (
      <>
        Actively protects your system by preventing potential issues.
      </>
    ),
  },
  {
    title: '⚡ Instant Alerts',
    Svg: require('@site/static/img/instant-alerts.svg').default,
    description: (
      <>
        Instantly notifies you of potential issues, keeping you one step ahead.
      </>
    ),
  },
  {
    title: '🔌 No Code Changes',
    Svg: require('@site/static/img/no-code-changes.svg').default,
    description: (
      <>
        No need to change your existing setup.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
