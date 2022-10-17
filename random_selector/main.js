var images =[
    " https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/collage-1636443427.jpg?crop=0.484xw:0.967xh;0.507xw,0.00977xh&resize=640:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJEQPOcFWdWgh_XgsgH6Wz1RBzerbxzV0Rw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZapcP6HzoYlw2dtkgI01BDrAjObbnewK7w&usqp=CAU",
    "random_selector/hamburger.jpg"


]

$(function(){
    //確認能夠知道用者按了按鈕
    //$("Input")=>document.getElementsByTagname
    //on => addEventListner
    $("input").on("click",function(){
        //alert("Hi");
    var numberOfListItem = $("#choices li").length;
    // 0~1*3 => 0~3(2.9999x) => floor => 0,1,2
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        $("img").attr("src",images[randomChildNumber]);
    });
});  //$("h1").text("Hello");按按鈕從Hi變Hello
//$("h1").text($("li:first").text());抓出拉麵