/* closite/site1/site-misc.js                 -*- text -*-
 *
 * Extra JS code for demoing. Not needed for actual implementations.
 */

$().ready(function(){

  for (i = 0; i < sites.length; i++) {
    a = document.createElement("a")
    li = document.createElement("li")
    $(a).text(sites[i]) 
    $(a).attr('href', sites[i])
    li.appendChild(a)
    document.getElementById('all-sites').appendChild(li)
  }
})
