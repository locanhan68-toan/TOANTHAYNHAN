$knttContent = [System.IO.File]::ReadAllText('C:\Users\NHAN\.gemini\antigravity\scratch\toan-hoc-online\curriculum-kntt.js', [System.Text.Encoding]::UTF8)

# Read chapters and lessons in Grade 12
$regex = [regex]'(?s)12:\s*\{(.*?)\n  \}'
$m = $regex.Match($knttContent)
if ($m.Success) {
    $text = $m.Groups[1].Value
    $lMatches = [regex]::Matches($text, 'id:\s*"(g12-c\d+-[^"]+)",\s*number:\s*"([^"]+)",\s*title:\s*"([^"]+)"')
    Write-Output "Found $($lMatches.Count) lessons for Grade 12:"
    foreach ($lm in $lMatches) {
        Write-Output "$($lm.Groups[1].Value) | $($lm.Groups[2].Value) | $($lm.Groups[3].Value)"
    }
}
