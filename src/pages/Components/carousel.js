import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import CORA1 from '../../images/phases/CORA1.jpg';
import CORA2 from '../../images/phases/CORA2.jpg';
import CORA3 from '../../images/phases/CORA3.jpg';
import CORA4 from '../../images/phases/CORA4.jpg';

const items = [
  {
    src: CORA1,
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: CORA2,
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: CORA3,
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3'
  },
  {
    src: CORA4,
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '4'
  }
];

const Client = () => <UncontrolledCarousel items={items} />;

export default Client;