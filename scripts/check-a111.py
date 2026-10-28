from pathlib import Path
import re,subprocess
root=Path(__file__).resolve().parent.parent
for name in ['index.html','evento.html']:
 s=(root/name).read_text(encoding='utf-8')
 js=re.search(r'<script>(.*?)</script>',s,re.S).group(1)
 tmp=root/'scripts'/'_temp-a111.js'
 tmp.write_text(js,encoding='utf-8')
 result=subprocess.run(['node','--check',str(tmp)],capture_output=True,text=True)
 print(name,'JS',result.returncode,result.stderr[:900])
 if result.returncode: raise SystemExit(1)
tmp.unlink()
s=(root/'index.html').read_text(encoding='utf-8')
assert 'href="'+chr(39)+'+esc(eventUrl(e))' in s
assert 'event-bottom' in s
print('card routing and document syntax OK')
