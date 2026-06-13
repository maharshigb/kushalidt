# download_assets.ps1
# PowerShell script to download Stitch screens

$screens = @{
    "Splash_Screen.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzYzZmY1Y2U2YjM3MTRhNDFhODg2M2I0YjJmOTM1NzE1EgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Login_Screen.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NDExNjA3MjA4NmYwNzc5OWVjYmIwMTBkNGQ2EgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Home_Dashboard.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NDExNTkyMzY3NjIwMGFkZjE4NWJmM2I5NjQ2EgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Monitoring_Overview.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzQxNTk1MDRhODUwYTQxMTA4NGEwMzM1MmFkMTlkOWYxEgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Live_Monitoring_Dashboard.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NDExNmQyNDU5NTEwOTM0ZDA2ODVlMzNkODNlEgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Manhole_Details.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NDExNThmNzY4ZjgwMzgzOTEwYzk1MDBlODZhEgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Worker_Safety.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NDExNjBmZGI4ZDEwNjM5NzE4ZWY0MWU0MWFjEgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Alerts_Notifications.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NDExNTkzYTZhNjIwOTI1YzUwY2RjMWY3MGQ3EgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Analytics_Reports.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NDExNWUyNGI4ZWMwMzM4NGU0NGM1MThiYTZiEgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Incident_Reporting.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NDExNjA1MzM4ZGMwMWE2MmQ4ZGYwMDJmMDU1EgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "Profile_Settings.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2Q4YWEwMDgwNGE0NjQyN2ZhMjZhZTBlZGQwM2FhYzNmEgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
    "SafeHole_AI_Industrial_Monitoring.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzUyMWI1NmM2Yjc0ZTQ4YTc5NDMxNDViNTFlNjQ1YmExEgsSBxCWvvXg7hwYAZIBIwoKcHJvamVjdF9pZBIVQhM5MTQwMTYzNjc3NDQ5OTA0MzYy&filename=&opi=89354086"
}

$outputDir = "raw_screens"
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}

foreach ($screenName in $screens.Keys) {
    $url = $screens[$screenName]
    $outputPath = Join-Path $outputDir $screenName
    Write-Host "Downloading $screenName..."
    Invoke-WebRequest -Uri $url -OutFile $outputPath
}

Write-Host "All downloads complete."
