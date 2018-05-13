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
        identifier: 'alabama_middle',
        name: 'Alabama Middle',
        feed_url: 'https://ecf.almd.uscourts.gov/cgi-bin/rss_outside.pl',
      },
      {
        identifier: 'alabama_southern',
        name: 'Alabama Southern',
        feed_url: 'https://ecf.alsd.uscourts.gov/cgi-bin/rss_outside.pl',
      },
      {
        identifier: 'alaska',
        name: 'Alaska',
        feed_url: 'https://ecf.akd.uscourts.gov/cgi-bin/rss_outside.pl',
      },
      {
        identifier: 'arizona',
        name: 'Arizona',
        feed_url: 'https://ecf.azd.uscourts.gov/cgi-bin/rss_outside.pl',
      },
      {
        identifier: 'arkansas_eastern',
        name: 'Arkansas Eastern',
        feed_url: 'https://ecf.ared.uscourts.gov/cgi-bin/rss_outside.pl',
      },
      {
        identifier: 'arkansas_western',
        name: 'Arkansas Western',
        feed_url: 'https://ecf.arwd.uscourts.gov/cgi-bin/rss_outside.pl',
      },
      {
        identifier: 'california_central',
        name: 'California Central',
        feed_url: 'https://ecf.cacd.uscourts.gov/cgi-bin/rss_outside.pl',
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
