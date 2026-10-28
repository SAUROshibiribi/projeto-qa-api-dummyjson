import http from 'k6/http';
import { check, sleep } from 'k6';

// Teste de carga LEVE contra uma API pública de demonstração.
// Mantenha poucos usuários virtuais para não sobrecarregar o serviço.
export const options = {
  vus: 5,          // usuários virtuais simultâneos
  duration: '30s', // duração do teste
  thresholds: {
    http_req_failed: ['rate<0.01'],    // menos de 1% de falhas
    http_req_duration: ['p(95)<1000'], // 95% das respostas abaixo de 1s
  },
};

const BASE_URL = 'https://dummyjson.com';

export default function () {
  const lista = http.get(`${BASE_URL}/products?limit=10`);
  check(lista, {
    'listagem: status 200': (r) => r.status === 200,
    'listagem: retorna produtos': (r) => r.json('products').length > 0,
  });

  const produto = http.get(`${BASE_URL}/products/1`);
  check(produto, {
    'produto 1: status 200': (r) => r.status === 200,
    'produto 1: id correto': (r) => r.json('id') === 1,
  });

  sleep(1); // pausa entre iterações, simulando um usuário real
}
