/* closite/site1/closite.js               -*- text -*-
 *
 * Copyright Thomas Habets 2010
 * 
 * http://github.com/ThomasHabets/closite
 *
 * 3-clause BSD license.
 *
 * This code measures the latency to all sites and rewrites all links
 * so that the user will end up on the closest site next time they click.
 *
 * jquery and sites.js (config file) must be loaded before this file.
 */
var start_time
var site_times = new Array()

$().ready(function(){
  function current_site()
  {
    cur = new String(window.location)
    for (i = 0; i < sites.length; i++) {
      re = new RegExp("^" + sites[i])
      if (cur.match(re)) {
        return i
      }
    }
    return -1
  }
  current_site_number = current_site()

  function set_site(s)
  {
    cursite = current_site_number

    if (cursite < 0) {
      //console.log("Warning: don't know what site we're on")
      return
    }
    
    r = new RegExp("^" + sites[cursite])
    $('a').each(function(idx, item){
      t = new String(item.href)
      old = new String(t)
      t = t.replace(r, s)
      item.href = t
    })
  }
  function check_times()
  {
    if (site_times.length < sites.length) {
      return
    }
    min_i = 0
    for (i = 1; i < sites.length; i++) {
      if (site_times[i].time < site_times[min_i].time) {
        min_i = i
      }
    }
    set_site(sites[site_times[min_i].site_number])
  }

  if (current_site_number < 0) {
    $("#site-number").text("error, error :-(")
  } else {
    $("#site-number").text(sites[current_site_number])
  }

  images = new Array()
  for (i = 0; i < sites.length; i++) {
    var img = new Image();
    img.site_number = i
    $(img).load(function() {
      res = new Object()
      res.site_number = this.site_number
      res.time = new Date().getTime() - start_time - this.site_number*5
      //console.log(this.site_number, sites[res.site_number], res.time)
      site_times.push(res)
      check_times();
    })
    images.push(img)
  }

  start_time = new Date().getTime()
  for (i = 0; i < sites.length; i++) {
    $(images[i]).attr("src", sites[i] + siteimage)
  }
})
