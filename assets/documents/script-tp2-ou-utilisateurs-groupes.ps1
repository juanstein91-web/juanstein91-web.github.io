# TP2 - etapes 4, 5 et 6 : OU, utilisateurs et groupes du domaine medilog.local
Import-Module ActiveDirectory
$dom = "DC=medilog,DC=local"

Write-Host "=== Etape 4 : creation des OU ==="
foreach ($ou in "OU_Commercial","OU_Technique","OU_Admin","OU_Informatique") {
    New-ADOrganizationalUnit -Name $ou -Path $dom
}

Write-Host "=== Etape 5 : creation des utilisateurs ==="
$mdp = Read-Host "Mot de passe commun des utilisateurs" -AsSecureString

$users = @(
    @("Camille","Martin","c.martin","OU_Commercial"),
    @("Claire","Dupont","c.dupont","OU_Commercial"),
    @("Christophe","Leroy","c.leroy","OU_Commercial"),
    @("Thomas","Bernard","t.bernard","OU_Technique"),
    @("Théo","Simon","t.simon","OU_Technique"),
    @("Arnaud","Leclercq","a.leclercq","OU_Admin"),
    @("Isabelle","Moreau","i.moreau","OU_Informatique")
)
foreach ($u in $users) {
    New-ADUser -Name "$($u[0]) $($u[1])" -GivenName $u[0] -Surname $u[1] -SamAccountName $u[2] `
        -UserPrincipalName "$($u[2])@medilog.local" -Path "OU=$($u[3]),$dom" `
        -AccountPassword $mdp -Enabled $true -ChangePasswordAtLogon $false
}

Write-Host "=== Etape 6 : creation des groupes ==="
New-ADGroup -Name "GRP_Commercial" -GroupScope Global -Path "OU=OU_Commercial,$dom"
New-ADGroup -Name "GRP_Technique" -GroupScope Global -Path "OU=OU_Technique,$dom"
New-ADGroup -Name "GRP_Admin" -GroupScope Global -Path "OU=OU_Admin,$dom"
New-ADGroup -Name "GRP_Informatique" -GroupScope Global -Path "OU=OU_Informatique,$dom"
Add-ADGroupMember -Identity "GRP_Commercial" -Members c.martin,c.dupont,c.leroy
Add-ADGroupMember -Identity "GRP_Technique" -Members t.bernard,t.simon
Add-ADGroupMember -Identity "GRP_Admin" -Members a.leclercq
Add-ADGroupMember -Identity "GRP_Informatique" -Members i.moreau

Write-Host "=== Verification ==="
Get-ADUser -Filter * -SearchBase $dom | Where-Object { $_.DistinguishedName -like "*OU=OU_*" } | Select-Object SamAccountName, Enabled | Format-Table -AutoSize
Read-Host "Entree pour fermer"
