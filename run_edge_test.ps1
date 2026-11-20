$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
& $edge --headless --disable-gpu --allow-file-access-from-files --dump-dom 'file:///C:/Users/NHAN/.gemini/antigravity/scratch/toan-hoc-online/test_suite.html' | Out-File -FilePath 'C:\Users\NHAN\.gemini\antigravity\scratch\toan-hoc-online\edge_dom.txt' -Encoding utf8
Get-Content -Path 'C:\Users\NHAN\.gemini\antigravity\scratch\toan-hoc-online\edge_dom.txt' | Select-String -Pattern 'test-output' -Context 0, 40
