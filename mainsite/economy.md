---
layout: default
title:  Economy 
permalink: /discussions/economy/
weight: 2
---


<!-- Begin Feed Section --> 
<section id ="feed-page">

<div id="content">

<script type = "text/javascript" 
		         src = "http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>	
		        <script type = "text/javascript" language = "javascript">
		        $(document).ready(function() {
		               $.getJSON('/feed/qanda230516.json', function(jd) {
		               	  for (i = 0; i < 7; i++){
		                 	 $('#feed' + i ).html('<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title"><i class="fa fa-twitter" aria-hidden="true"></i>&nbspTwitter</h3></div><div class="panel-body"><p>' + jd.data[i] + 
		                         '</p></div></div>'   	


		                 	 );}	  
		               });
		         });
</script>


	<div class = "container"> 	

		<div class="col-xs-12">
			<h2> RealQuestions Early Access</h2>
				
				<!-- <p>
					Whilst we get our new web technology into gear & ready for you, we have thrown together a application which allows you begin the conversation on Facebook.
					<br/><br/>
					This page tracks the discussions we have around "Economy". This is a work in progress, In the near future, it will show a list of our discussions from Facebook, and will add on feeds from other sources in due course.
				</p> -->
		</div>

		<div class="col-xs-12">
			<h2> Trending #QandA </h2>
		</div>

		<div class="row">			 		
			 <div id = "feed1" class="col-xs-12 col-sm-4"></div>
			 <div id = "feed2" class="col-xs-12 col-sm-4"></div>
			 <div id = "feed3" class="col-xs-12 col-sm-4"></div>
			 <div id = "feed4" class="col-xs-12 col-sm-4"></div>
			 <div id = "feed5" class="col-xs-12 col-sm-4"></div>
			 <div id = "feed6" class="col-xs-12 col-sm-4"></div>
		</div> 


		<!--Div that will hold the pie chart-->
     
<div class = "col-xs-12">
	<div id="donutchart" style="height: 500px;"></div>
</div>


<div class="col-xs-12 well">
        <h2>Join us on Facebook</h2>
        <h5>We need your questions! Begin by asking a simple question via our facebook app, which is now live. Your question will be tagged to the category choosen, included on our page & of course on your timeline.</h5>
         <p>
<!--            <a href="#me" class="btn btn-primary btn-large btn-profile hidden">View My Profile</a> -->
            <a href="#login" class="btn btn-primary btn-large btn-login">Login with Facebook</a>
            <a href="#post" class="btn btn-default btn-profile hidden">Ask A Question</a>
            <a href="#logout" class="btn btn-danger btn-profile hidden">Logout</a>
        </p>
</div>



<!-- 
<div class="col-md-6 col-sm-6 col-xs-12">
	     <img class="img-responsive" src="{{ my_page.url | prepend: site.baseurl }}/assets/earlyaccess/economy.jpg" alt="" />
	</div>

-->

</div>


<!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript">

     // Load the Visualization API and the piechart package.
    google.charts.load('current', {'packages':['corechart']});
      
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);


     console.log('hellow, world');


    function drawChart() {
	      var jsonData = $.ajax({
	          url: "/getData.json",
	          dataType: "json",
	          })

	      // Create our data table out of JSON data loaded from server.
	      var data = google.visualization.arrayToDataTable([

        ['Tweet', 'Score'],
["Still buffering? Blame Malcolm. #qanda https://t.co/J4HF0rRSGz", 32],
["@QandA be warned, @cpyne I'm wearing my @SSFCRABBITOHS tie tonight, it gives special powers to all who wear it loyally #warningtweet", 27],
["Limbering up for @QandA with @AlboMP - I'm going to go easy on him. He's as skittish as a rabbit on Guy Fawkes night #warningtweet",18],
["Hey, #qanda audience: HANDS UP IF YOU WANT A #FEDERALICAC", 18],
["Police get sent in to disperse #sayno2murdoch protest Why? They might hurt Chrissie Pyne #saveourABC #ourABC #QandA https://t.co/CMGoKNWhij",17],
["RT @DavidW2035: I don't think @cpyne liked my tweet. Truth hurts! #auspol #qanda https://t.co/rjdWB3bsJD", 17],
["I donâ€™t want a Trump in Australia, Can you be statesmen not dickheads? @cpyne &amp; @AlboMP respond #QandA https://t.co/8xETSG8zhW", 17],
["What to watch - #GameofThrones or #QandA? One's a brutal death match between egotistical psychopaths but Game of Thrones is good too. :-/ ", 14],
["Tonight watch #QandA with @cpyne &amp; @AlboMP 9.35pm AEST on ABC, @ABCNews24 &amp; @abciview. Live on Facebook for international viewers #auspol",13],
["There have been cuts at CSIRO &amp; evidence based policy making should be cherished, says @AlboMP #QandA https://t.co/3IIdBJD0GT", 13],
["This 2 person @QandA has a bonus - we get individual dressing rooms .... https://t.co/mVtXEEUp0X", 13],
["#qanda oh spare me the concocted drivel of budget projections. There is no plan to reduce debt - all based on fairytale assumptions",  12],
["CSIRO climate cuts will trash a decade of hard work with the Bureau of Meteorology and universities. https://t.co/Qp6sd42DaP #qanda", 11],
["If you want typical example of LNP's born to rule, entitlement attitude, total lack of awareness of privilege, watch Mr Pyneful on QandA", 11],
["Labor will guarantee funding for TAFE to give our kids the opportunity to learn a trade and help older workers to reskill. #qanda", 10],
["Come on let's give @TurnbullMalcolm some credit on #NBN - last week he finally got copper to the home! #Qanda https://t.co/Z5UG3rczf9", 9],
["Why are all South Australian Liberals so bloody irritating ? Is it something they eat ? #qanda",  9],
["I'd like to remind @cpyne that L/NP stands for Liberal/National Party - aka a COALITION! #QandA",  8],
["Howard did not need plebiscite to alter marriage act to define marriage as woman/man. Don't need plebiscite to change back #qanda #auspol", 8],
["#qanda #mediawatch &amp; #4Corners trending tonight because there is a demand for answers, not waffle. We're tired of it. #auspol", 8]
         ]

);
	      var options = {
          title: 'ABC QandA:  23 May 2016 Sample set',
          pieHole: 0.3,
        };



        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }

    </script>







<div id="contentactions">
</div>


</section> <!-- End Feed Section --> 


