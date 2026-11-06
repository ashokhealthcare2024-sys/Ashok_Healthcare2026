# PowerShell script to replace .html internal links with trailing-slash URLs
# Mapping for service pages (both with and without '../' prefix)
$serviceMap = @{
    'services/home-nursing.html' = '/services/home-nursing/'
    '../services/home-nursing.html' = '/services/home-nursing/'
    'services/home-icu.html' = '/services/home-icu/'
    '../services/home-icu.html' = '/services/home-icu/'
    'services/elder-care.html' = '/services/elder-care/'
    '../services/elder-care.html' = '/services/elder-care/'
}
# Mapping for blog posts (with and without '../' prefix)
$blogMap = @{
    'blog/best-home-healthcare-services-in-bangalore.html' = '/blog/best-home-healthcare-services-in-bangalore/'
    '../blog/best-home-healthcare-services-in-bangalore.html' = '/blog/best-home-healthcare-services-in-bangalore/'
    'blog/home-nursing-services-in-bangalore-complete-guide.html' = '/blog/home-nursing-services-in-bangalore-complete-guide/'
    '../blog/home-nursing-services-in-bangalore-complete-guide.html' = '/blog/home-nursing-services-in-bangalore-complete-guide/'
    'blog/bipap-machine-in-yeshwanthpur-expert-home-healthcare-for-sleep-apnea-copd-patients.html' = '/blog/bipap-machine-in-yeshwanthpur-expert-home-healthcare-for-sleep-apnea-copd-patients/'
    '../blog/bipap-machine-in-yeshwanthpur-expert-home-healthcare-for-sleep-apnea-copd-patients.html' = '/blog/bipap-machine-in-yeshwanthpur-expert-home-healthcare-for-sleep-apnea-copd-patients/'
    'blog/home-icu-setup-bangalore.html' = '/blog/home-icu-setup-bangalore/'
    '../blog/home-icu-setup-bangalore.html' = '/blog/home-icu-setup-bangalore/'
    'blog/physiotherapy-at-home-after-surgery.html' = '/blog/physiotherapy-at-home-after-surgery/'
    '../blog/physiotherapy-at-home-after-surgery.html' = '/blog/physiotherapy-at-home-after-surgery/'
    'blog/elder-care-services-guide.html' = '/blog/elder-care-services-guide/'
    '../blog/elder-care-services-guide.html' = '/blog/elder-care-services-guide/'
}
# Function to replace strings in a file
function Replace-InFile {
    param([string]$filePath)
    $content = Get-Content $filePath -Raw -Encoding UTF8
    foreach ($kv in $serviceMap.GetEnumerator()) {
        $pattern = [regex]::Escape($kv.Key)
        $content = $content -replace $pattern, $kv.Value
    }
    foreach ($kv in $blogMap.GetEnumerator()) {
        $pattern = [regex]::Escape($kv.Key)
        $content = $content -replace $pattern, $kv.Value
    }
    # Replace any remaining index.html links to site root
    $content = $content -replace [regex]::Escape('index.html'), '/'
    Set-Content -Path $filePath -Value $content -Encoding UTF8
}
# Process all .html files except those under assets folder
Get-ChildItem -Path . -Recurse -Filter *.html | Where-Object { $_.FullName -notmatch '\\assets\\' } | ForEach-Object { Replace-InFile $_.FullName }
Write-Host "Link replacements completed."
