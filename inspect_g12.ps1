$path = 'C:\Users\NHAN\.gemini\antigravity\scratch\toan-hoc-online\curriculum-grade12.js'
$lines = Get-Content $path
$lessons = @()
$chapters = @()
foreach ($line in $lines) {
    if ($line -match 'id:\s*"(c\d+)"') {
        $chapters += $matches[1]
    }
    if ($line -match 'id:\s*"(g12-[^"]+)"') {
        $lessons += $line.Trim()
    }
    if ($line -match 'title:\s*"([^"]+)"' -and $lessons.Count -gt 0 -and $lessons.Count -le 25) {
        # output some samples
    }
}
Write-Output "Lessons found:"
$lessons | ForEach-Object { Write-Output $_ }
