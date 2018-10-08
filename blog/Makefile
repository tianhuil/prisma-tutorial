build:
	docker build -t blog-server:dev . -f Dockerfile --network prisma-tutorial_default

deploy:
	docker run -it --network blog-network -v $(shell pwd)/src/generated:/home/workdir/src/generated blog-server:dev yarn deploy

run:
	docker run -it -p 4000:4000 --network blog-network -v $(shell pwd):/home/workdir/ blog-server:dev
