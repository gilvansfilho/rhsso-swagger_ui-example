This is a simple sample showing how to protect your Swagger-ui with RHSSO.

# Steps

Run `rhsso/run.sh` to start a rhsso server

```
cd rhsso
chmod +x run.sh
./run.sh
```

Access RHSSO at http://localhost:8282/ with admin / admin username and password and create a public client like below: 
- Client ID: client
- Client Protocol: openid-connect
- Access Type: public
- Standard Flow Enabled: ON
- Valid Redirect URIs: *
- Web Origins: *

Run `swagger/run.sh`
```
cd swagger
chmod +x run.sh
./run.sh
```

> Be sure to loggout RHSSO before access swagger-ui
