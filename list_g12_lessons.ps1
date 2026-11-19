$content = [System.IO.File]::ReadAllText('C:\Users\NHAN\.gemini\antigravity\scratch\toan-hoc-online\curriculum-grade12.js', [System.Text.Encoding]::UTF8)

# Find all occurrences of lesson definitions
$regex = [regex]'(?s)lessonId:\s*"([^"]+)",\s*title:\s*"([^"]+)"'
$matches = $regex.Matches($content)
Write-Output "Found $($matches.Count) lessons in curriculum-grade12.js:"
foreach ($m in $matches) {
    Write-Output "$($m.Groups[1].Value) : $($m.Groups[2].Value)"
}

# Also check curriculum-kntt.js for Grade 12
if (Test-Path 'C:\Users\NHAN\.gemini\antigravity\scratch\toan-hoc-online\curriculum-kntt.js') {
    $knttContent = [System.IO.File]::ReadAllText('C:\Users\NHAN\.gemini\antigravity\scratch\toan-hoc-online\curriculum-kntt.js', [System.Text.Encoding]::UTF8)
    $knttRegex = [regex]'(?s)12:\s*\{\s*title:[^\{]*?chapters:\s*\[(.*?)\]\s*\}'
    $km = $knttRegex.Match($knttContent)
    if ($km.Success) {
        Write-Output "`nChapters from curriculum-kntt.js:"
        $chMatches = [regex]::Matches($km.Groups[1].Value, '(?s)id:\s*"([^"]+)",\s*title:\s*"([^"]+)".*?lessons:\s*\[(.*?)\]')
        foreach ($cm in $chMatches) {
            Write-Output "Chapter $($cm.Groups[1].Value): $($cm.Groups[2].Value)"
            $lMatches = [regex]::Matches($cm.Groups[3].Value, 'id:\s*"([^"]+)",\s*number:\s*"([^"]+)",\s*title:\s*"([^"]+)"')
            foreach ($lm in $lMatches) {
                Write-Output "  -> $($lm.Groups[1].Value) | $($lm.Groups[2].Value) | $($lm.Groups[3].Value)"
            }
        }
    }
}
