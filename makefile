
make: 
	yarn build ;\
	yarn prettier build/index.html --write ;\
	cp build/index.html build/index.tmp.html
	sed '1,7d' build/index.tmp.html > build/index.html ;\
	node build.cjs ;\
	yarn html-minifier --remove-comments --collapse-whitespace --minify-js true --minify-css true --remove-redundant-attributes --collapse-inline-tag-whitespace --sort-class-name --remove-tag-whitespace --remove-tag-whitespace   build/index.html  -o build/page.html ;\
	find build/ ! -name page.html -delete
