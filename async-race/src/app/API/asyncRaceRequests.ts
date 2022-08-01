const asyncRaceRequests = [
  {
    name: 'Get Cars (all)',
    request: {
      method: 'GET',
      header: [],
      url: {
        raw: 'http://localhost:3000/garage',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['garage'],
      },
    },
    response: [],
  },
  {
    name: 'Get Cars (page 1 | limit 7)',
    request: {
      method: 'GET',
      header: [],
      url: {
        raw: 'http://localhost:3000/garage?_page=1&_limit=7',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['garage'],
        query: [
          {
            key: '_page',
            value: '1',
          },
          {
            key: '_limit',
            value: '7',
          },
        ],
      },
    },
    response: [],
  },
  {
    name: 'Get Car (id 1)',
    request: {
      method: 'GET',
      header: [],
      url: {
        raw: 'http://localhost:3000/garage/1',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['garage', '1'],
      },
    },
    response: [],
  },
  {
    name: 'Create Car',
    request: {
      method: 'POST',
      header: [
        {
          key: 'Content-Type',
          value: 'application/json',
          type: 'text',
        },
      ],
      body: {
        mode: 'raw',
        raw: '{\r\n    "name": "Iryna",\r\n    "color": "#ef3c40"\r\n}',
      },
      url: {
        raw: 'http://localhost:3000/garage',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['garage'],
      },
    },
    response: [],
  },
  {
    name: 'Delete Car (by id)',
    request: {
      method: 'DELETE',
      header: [],
      url: {
        raw: 'http://localhost:3000/garage/1',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['garage', '1'],
      },
    },
    response: [],
  },
  {
    name: 'Update Car (by id)',
    request: {
      method: 'PUT',
      header: [
        {
          key: 'Content-Type',
          value: 'application/json',
          type: 'text',
        },
      ],
      body: {
        mode: 'raw',
        raw: '{\r\n        "name": "Vesla",\r\n        "color": "#000000"\r\n}',
      },
      url: {
        raw: 'http://localhost:3000/garage/1',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['garage', '1'],
      },
    },
    response: [],
  },
  {
    name: "Start Car's Engine",
    request: {
      method: 'PATCH',
      header: [],
      url: {
        raw: 'http://localhost:3000/engine?id=1&status=started&_sort=id&_order=ASC',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['engine'],
        query: [
          {
            key: 'id',
            value: '1',
          },
          {
            key: 'status',
            value: 'started',
          },
          {
            key: '_sort',
            value: 'id',
          },
          {
            key: '_order',
            value: 'ASC',
            description: 'DESC',
          },
        ],
      },
    },
    response: [],
  },
  {
    name: "Stop Car's Engine Copy",
    request: {
      method: 'PATCH',
      header: [],
      url: {
        raw: 'http://localhost:3000/engine?id=1&status=stopped',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['engine'],
        query: [
          {
            key: 'id',
            value: '1',
          },
          {
            key: 'status',
            value: 'stopped',
          },
        ],
      },
    },
    response: [],
  },
  {
    name: "Switch Car's Engine to Drive Mode",
    request: {
      method: 'PATCH',
      header: [],
      url: {
        raw: 'http://localhost:3000/engine?id=1&status=drive',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['engine'],
        query: [
          {
            key: 'id',
            value: '1',
          },
          {
            key: 'status',
            value: 'drive',
          },
        ],
      },
    },
    response: [],
  },
  {
    name: 'Get Winners',
    request: {
      method: 'GET',
      header: [],
      url: {
        raw: 'http://localhost:3000/winners?_pade=1&_limit=10&_sort=id&_order=ASC',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['winners'],
        query: [
          {
            key: '_pade',
            value: '1',
          },
          {
            key: '_limit',
            value: '10',
          },
          {
            key: '_sort',
            value: 'id',
          },
          {
            key: '_sort',
            value: 'wins',
            disabled: true,
          },
          {
            key: '_sort',
            value: 'time',
            disabled: true,
          },
          {
            key: '_order',
            value: 'ASC',
          },
          {
            key: '_order',
            value: 'DESC',
            disabled: true,
          },
        ],
      },
    },
    response: [],
  },
  {
    name: 'Get Winner',
    request: {
      method: 'GET',
      header: [],
      url: {
        raw: 'http://localhost:3000/winners/1',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['winners', '1'],
      },
    },
    response: [],
  },
  {
    name: 'Create Winner',
    request: {
      method: 'POST',
      header: [
        {
          key: 'Content-Type',
          value: 'application/json',
          type: 'text',
        },
      ],
      body: {
        mode: 'raw',
        raw: '{\r\n    "id": 1,\r\n    "wins": 10,\r\n    "time": 10\r\n}',
      },
      url: {
        raw: 'http://localhost:3000/winners',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['winners'],
      },
    },
    response: [],
  },
  {
    name: 'Delete Winner',
    request: {
      method: 'DELETE',
      header: [],
      url: {
        raw: 'http://localhost:3000/winners/2',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['winners', '2'],
      },
    },
    response: [],
  },
  {
    name: 'Update Winner',
    request: {
      method: 'PUT',
      header: [
        {
          key: 'Content-Type',
          value: 'application/json',
          type: 'text',
        },
      ],
      body: {
        mode: 'raw',
        raw: '  {\r\n    "wins": 0,\r\n    "time": 11\r\n  }',
      },
      url: {
        raw: 'http://localhost:3000/winners/1',
        protocol: 'http',
        host: ['localhost'],
        port: '3000',
        path: ['winners', '1'],
      },
    },
    response: [],
  },
];
