// local storage
> persistant Storage
> save wrt to browser 
> we have to remove manully

localStorage.setItem('tokenls','463f445yg54')
undefined
localStorage.getItem('tokenls')
"463f445yg54"
localStorage.removeItem('tokenls')
undefined
localStorage.getItem('tokenls')
null

// session storage
> temp storage 
> save wrt to tab 

sessionStorage.setItem('access_key','3534fr43grg')
undefined
sessionStorage.getItem('access_key')
"3534fr43grg"
sessionStorage.removeItem('access_key')
undefined

// cookies
> save wrt to website
> expire in time 

document.cookie
""
document.cookie="mycookies=86876786; expires=Tue, 13 April 2021 01:00:00 UTC"
"mycookies=86876786; expires=Tue, 13 April 2021 01:00:00 UTC"

document.cookie
"mycookies=86876786"