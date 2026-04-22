import os
import re

base_dir = r'\\wsl.localhost\portalufu\var\www\keyneskanno.github.io\dentista\mabelin'
html_path = os.path.join(base_dir, 'index.html')
css_dir = os.path.join(base_dir, 'css')
js_dir = os.path.join(base_dir, 'js')

os.makedirs(css_dir, exist_ok=True)
os.makedirs(js_dir, exist_ok=True)

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# CSS Extrair
css_match = re.search(r'\s*<style>(.*?)</style>', html, re.DOTALL)
if css_match:
    with open(os.path.join(css_dir, 'style.css'), 'w', encoding='utf-8') as f:
        f.write(css_match.group(1).strip() + '\n')
    html = html[:css_match.start()] + '\n    <link rel="stylesheet" href="css/style.css" />' + html[css_match.end():]

# JS Extrair
scripts = re.findall(r'\s*<script>(.*?)</script>', html, re.DOTALL)
if scripts:
    with open(os.path.join(js_dir, 'script.js'), 'w', encoding='utf-8') as f:
        for s in scripts:
            f.write(s.strip() + '\n\n')
    
    count = 0
    def repl(m):
        global count
        count += 1
        return '\n    <script src="js/script.js"></script>' if count == len(scripts) else ''
    
    html = re.sub(r'\s*<script>.*?</script>', repl, html, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print("Separação concluída!")
