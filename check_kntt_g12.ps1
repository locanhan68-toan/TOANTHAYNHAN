$knttContent = [System.IO.File]::ReadAllText('C:\Users\NHAN\.gemini\antigravity\scratch\toan-hoc-online\curriculum-kntt.js', [System.Text.Encoding]::UTF8)

# Check how Grade 12 is structured in window.KNTT_CURRICULUM
$regex = [regex]'(?s)12:\s*\{.*?chapters:\s*\[(.*?)\]\s*\}\s*\}'
$m = $regex.Match($knttContent)
if ($m.Success) {
    Write-Output "Matched Grade 12 in KNTT_CURRICULUM:"
    $chBlocks = [regex]::Matches($m.Groups[1].Value, '(?s)\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*lessons:\s*\[(.*?)\]\s*\}')
    foreach ($cb in $chBlocks) {
        Write-Output "Chapter $($cb.Groups[1].Value): $($cb.Groups[2].Value)"
        $ls = [regex]::Matches($cb.Groups[3].Value, '\{\s*id:\s*"([^"]+)",\s*number:\s*"([^"]+)",\s*title:\s*"([^"]+)"')
        foreach ($l in $ls) {
            Write-Output "   $($l.Groups[1].Value) | $($l.Groups[2].Value) | $($l.Groups[3].Value)"
        }
    }
} else {
    Write-Output "Did not match Grade 12 in curriculum-kntt.js"
}
