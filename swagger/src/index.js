import SwaggerUI from 'swagger-ui'
import Keycloak from 'keycloak-js';
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./petstore.json');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
});

window.onload = function(e) {
  const keycloak = new Keycloak({
    url: 'http://localhost:8282/auth',
    realm: 'master',
    clientId: 'client'
  });
  
  keycloak.init({
    onLoad: 'login-required',
  });
}