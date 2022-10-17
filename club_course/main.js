
$(function(){
   $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")

   var topicCount=topic.length;
   let millisecsPerDay = 24*60*60*1000;

   for(var x=0;x<topicCount;x++){
    let currentDateString = (new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString();
    $("#courseTable").append(
        "<tr>"+
        `<td>${x+1}</td>`+
        `<td>${currentDateString.split("/")[1]}/${currentDateString.split("/")[2]}</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>"

    )
   }

});
