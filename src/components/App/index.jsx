import React from 'react';
import { Button } from 'reactstrap';
import styles from './index.scss';

export default () => (
  <div>
    <div id={styles.rootBanner}>
      Banner
    </div>
    <div id={styles.rootHero}>
      Hero
    </div>
    <div id={styles.rootTabs}>
      Tabs
    </div>
    <div id={styles.rootBody}>
      <div id={styles.rootBodyCard}>
        <Button color="primary">Primary</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  </div>
);
