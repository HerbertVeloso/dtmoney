import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Agência Sagittarius',
          amount: 28000,
          type: 'deposit',
          category: 'Salário',
          createdDate: new Date('2022-03-05 10:00:00')
        },
        {
          id: 2,
          title: 'Dr.Douglas',
          amount: 5000,
          type: 'deposit',
          category: 'Salário',
          createdDate: new Date('2022-03-01 08:00:00')
        },
        {
          id: 3,
          title: 'IPVA 2022',
          amount: 1200,
          type: 'withdraw',
          category: 'Transporte',
          createdDate: new Date('2022-03-10 13:00:00')
        }
      ]
    })
  },


  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);