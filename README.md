### Generate RSA512 Keypair (private key in PEM format):

`ssh-keygen -t rsa -b 4096 -E SHA512 -f jwtRS512.key -m PEM`

### Generate RSA512 public key in PEM format:

`openssl rsa -in jwtRS512.key -pubout -out public-key.pem`
