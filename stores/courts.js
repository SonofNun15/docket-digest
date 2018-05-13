module.exports = [
  {
    identifier: 'appeals',
    name: 'U.S. Courts of Appeals',
    courts: [
      {
        identifier: 'second_circuit_nextgen',
        name: 'Second Circuit - NextGen',
        feed_url: 'https://ecf.ca2.uscourts.gov/n/beam/servlet/TransportRoom?servlet=RSSGenerator',
      },
      {
        identifier: 'sixth_circuit_nextgen',
        name: 'Sixth Circuit - NextGen',
        feed_url: 'https://ecf.ca6.uscourts.gov/n/beam/servlet/TransportRoom?servlet=RSSGenerator',
      },
      {
        identifier: 'tenth_circuit_nextgen',
        name: 'Tenth Circuit - NextGen',
        feed_url: 'https://ecf.ca10.uscourts.gov/n/beam/servlet/TransportRoom?servlet=RSSGenerator',
      },
      {
        identifier: 'dc_circuit_nextgen',
        name: 'D.C. Circuit - NextGen',
        feed_url: 'https://ecf.cadc.uscourts.gov/n/beam/servlet/TransportRoom?servlet=RSSGenerator',
      },
      {
        identifier: 'federal_circuit_nextgen',
        name: 'Federal Circuit - NextGen',
        feed_url: 'https://ecf.cafc.uscourts.gov/n/beam/servlet/TransportRoom?servlet=RSSGenerator',
      },
    ],
  },
  {
    identifier: 'district',
    name: 'U.S. District Courts',
    courts: [
      {
        identifier: '',
        name: '',
        feed_url: '',
      },
    ],
  },
  {
    identifier: 'bankruptcy',
    name: 'U.S. Bankruptcy Courts',
    courts: [
      {
        identifier: '',
        name: '',
        feed_url: '',
      },
    ],
  },
];
