# Screeps AI

## Set up SSL Cert for screeps sync

Thanks to [laverdet](https://github.com/laverdet) for the [sync script](https://gist.github.com/laverdet/b67db14ccc8520abea2c).


Run these commands as root (on ubuntu) to add the generated SSL Cert.

```
mkdir /usr/local/share/ca-certificates/screeps
cp sync.crt /usr/local/share/ca-certificates/screeps/sync.crt
update-ca-certificates
```
