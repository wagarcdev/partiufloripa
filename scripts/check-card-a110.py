from pathlib import Path
import re, subprocess
p=Path(__file__).resolve().parent.parent/'index.html'
s=p.read_text(encoding='utf-8')
js=re.search(r'<script>(.*?)</script>',s,re.S).group(1)
f=p.parent/'scripts'/'_card-check.js'
f.write_text(js,encoding='utf-8')
r=subprocess.run(['node','--check',str(f)],capture_output=True,text=True)
f.unlink(missing_ok=True)
print('JS syntax:',r.returncode,r.stderr[:800])
print('featured mapping:', 'featured.map(e=>card(e,"featured"))' in s)
print('search mapping:', 'card(e' in s)
print('card variants:',all(x in s for x in ['event-featured','event-search','event-overlays']))
raise SystemExit(r.returncode)
