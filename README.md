# Tsyringe npm link issue
## Steps to reproduce
### Prepearing
```
git clone https://github.com/bromzh/tsyringe-npm-link-issue.git
```

1. Install lib dependencies and build library
```
cd library
npm i
npm run build
```
2. Link library
```
npm link
```
3. Install app dependencies and link library to app
```
cd ../simple-app
npm i
npm link @my/library
```

A symlink "@my/library" must appears in app's `node_modules` after this steps.

### Building and running app
Then we'll trying to build our app:

```
npm run build
```

Build must be successful if you did all right. After build, we'll trying to run our app:

```
npm run start
```

And we got error with these reason:
```
TypeInfo not known for "ApiService"
```

BUT! If we publish our lib to repo and install it in app or just copy builded lib to app, all things will be fine.

### Use library without symlinks

Copy library directly in app

```
# work in simple_app directory
rm -rf node_modules/@my
mkdir node_modules/@my
mkdir node_modules/@my/library
cp ../library/package.json node_modules/@my/library
cp -r ../library/build node_modules/@my/library
```

And then repeat build and run:

```
npm run build
npm run start
```

Now all works fine!
