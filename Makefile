PROMPT = prompt.txt

SASS_SRC = src/sass/main.scss
SASS_OUT = dist/css/sass.css

.PHONY: prompt clean build watch

build:
	@sass $(SASS_SRC) $(SASS_OUT)

watch:
	@sass --watch $(SASS_SRC):$(SASS_OUT)

prompt:
	@powershell -NoProfile -ExecutionPolicy Bypass -Command "$$out = @(); $$root = Get-Location; $$out += 'PROJECT TREE'; $$out += '============'; $$out += ''; $$out += (tree /F /A | Out-String); $$out += ''; $$out += 'EXTERNAL PLUGINS'; $$out += '================'; $$out += ''; Get-ChildItem -Recurse -File | Where-Object { $$_.FullName -match '\\(plugins)\\' } | ForEach-Object { $$rel = $$_.FullName.Substring($$root.Path.Length + 1); $$out += ('PLUGIN: ' + $$rel); $$out += '        External/plugin file - contents omitted'; $$out += '' }; $$extensions = '.php','.html','.htm','.css','.scss','.js','.ts','.json','.xml','.sql','.md','.txt','.c','.h','.cpp','.hpp','.java','.py'; $$media = '.png','.jpg','.jpeg','.gif','.webp','.svg','.ico','.mp4','.webm','.mp3','.wav','.ogg','.pdf'; Get-ChildItem -Recurse -File | Where-Object { $$_.Name -ne 'prompt.txt' -and $$_.FullName -notmatch '\\(plugins|node_modules|vendor|.git)\\' } | ForEach-Object { $$rel = $$_.FullName.Substring($$root.Path.Length + 1); $$ext = $$_.Extension.ToLower(); if ($$extensions -contains $$ext) { $$out += ''; $$out += ('FILE: ' + $$rel); $$out += ('=' * (6 + $$rel.Length)); $$out += ''; $$out += (Get-Content -LiteralPath $$_.FullName -Raw); } elseif ($$media -contains $$ext) { $$out += ''; $$out += ('MEDIA: ' + $$rel); $$out += ('=' * (7 + $$rel.Length)); $$out += ''; $$out += ('Type: ' + $$_.Extension.Substring(1).ToUpper()); $$out += ('Size: ' + [math]::Round($$_.Length / 1KB, 2) + ' KB'); } }; $$out | Set-Content -Encoding UTF8 $(PROMPT)"

clean:
	@powershell -NoProfile -Command "Remove-Item -Force -ErrorAction SilentlyContinue $(PROMPT)"