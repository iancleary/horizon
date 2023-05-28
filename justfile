# display all the recipes
help:
  just -l

# start the server
dev:
  npm run dev

lint:
  npm run lint

format:
  npm run prettier

clean:
  rm -rf .next/
  rm -rf dist
  rm -rf node_modules

# Upgrade all dependencies to the latest version
update:
  ncu -u
