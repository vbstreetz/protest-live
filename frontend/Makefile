run: node_modules
	@yarn start

deploy:
	@yarn build
	@surge -d https://protest-live.surge.sh -p build

node_modules:
	@npm i

.PHONY: deploy run
