/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('foodbanks').del();
  await knex('foodbanks').insert([
    {
      name: 'Food For Life Network',
      address: '3510 Biscayne Blvd, Miami, FL 33137',
      type: 'Food Bank',
      zone: '1',
      phone: '(305) 576-3663',
      lat: 25.8017556,
      lng: -80.2035881
    },
    {
      name: 'Saint John Baptist Church',
      address: '1328 NW 3rd Ave, Miami, FL 33136',
      type: 'Food Bank',
      zone: '2',
      phone: '(305) 372-3877',
      lat: 25.78734,
      lng: -80.20012
    },
    {
      name: 'Feeding South Florida',
      address: '2501 SW 32nd Terrace, Pembroke Park, FL 33023',
      type: 'Food Bank',
      zone: '3',
      phone: '(954) 518-1818',
      lat: 25.98715,
      lng: -80.17347
    },
    {
      name: 'Farm Share',
      address: '1255 W Atlantic Blvd, Pompano Beach, FL 33069',
      type: 'Food Bank',
      zone: '1',
      phone: '(954) 942-6785',
      lat: 26.233641,
      lng: -80.139748
    },
    {
      name: 'Glory Temple Ministries',
      address: '7950 NW 22 Avenue, Miami, FL 33147',
      type: 'Food Bank',
      zone: '2',
      phone: '(305) 456-5216',
      lat: 25.847023,
      lng: -80.233667
    },
    {
      name: 'Curleys House of Style',
      address: '6025 N.W. 6 Court, Miami, FL 33127',
      type: 'Food Bank',
      zone: '3',
      phone: '(305) 759-9805',
      lat: 25.830699,
      lng: -80.20648
    },
    {
      name: 'Mt Pisgah Seventh-day Adventist Church',
      address: '3340 NW 215th St, Miami Gardens, FL 33056',
      type: 'Food Bank',
      zone: '1',
      phone: '(305) 624-0679',
      lat: 25.9712261,
      lng: -80.2568991
    },
    {
      name: 'Glory Temple Ministries',
      address: '7950 NW 22 Avenue Miami, FL 33147',
      type: 'Food Bank',
      zone: '2',
      phone: '(305) 456-5216',
      lat: 26.233641,
      lng: -80.139748
    },
    {
      name: 'Harvest Fire Worship Center',
      address: '18291 NW 23rd Ave #3757, Miami Gardens, FL 33056',
      type: 'Food Bank',
      zone: '3',
      phone: '(305) 620-2986',
      lat: 25.9408686,
      lng: -80.2390172
    },
    {
      name: 'Volunteers of America of FL',
      address: '1492 W Flagler Street Miami, FL 33135',
      type: 'Food Bank',
      zone: '1',
      phone: '(305) 644-0335',
      lat: 25.7731991,
      lng: -80.2194653
    },
    {
      name: 'Miami Peniel Church Nazarene',
      address: '5801 NE 2nd Ave Miami, FL 33137',
      type: 'Food Bank',
      zone: '2',
      phone: '(305) 770-1960',
      lat: 25.8288133,
      lng: -80.1917071
    }
  ]);
};
