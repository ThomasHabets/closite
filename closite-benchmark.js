/* closite/site1/closite-benchmark.js               -*- text -*-
 *
 * Benchmarking stuff to show to the user which site is fastest. Usually not
 * needed for actual implementations.
 */
var start_time
var site_times = new Array()

$().ready(function(){


  $('#benchmark').click(function(event){
    var l = document.getElementById("site-list")

    $('#site-list').find("tr").remove()

    images = new Array()
    for (i = 0; i < sites.length; i++) {
      img = new Image()
      img.site_number = i
      $(img).load(function(){
        cur = new Date().getTime() - start_time
        tr = document.createElement("tr")
        a = document.createElement("a")
        td1 = document.createElement("td")
        td2 = document.createElement("td")
        $(a).text(sites[this.site_number])
        $(a).attr("href", sites[this.site_number])
        $(td2).text(cur + "ms")
        td1.appendChild(a)
        tr.appendChild(td1)
        tr.appendChild(td2)
        l.appendChild(tr)
      })
      images.push(img)
    }

    start_time = new Date().getTime()

    for (i = 0; i < images.length; i++) {
      $(images[i]).attr("src", sites[i] + siteimage)
    }
  })
})
