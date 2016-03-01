<!DOCTYPE html>
<html lang="en">

<?php
$dbhost = '50.62.209.119';
$dbuser = 'aaipdashadmin';
$dbpass = 'UCIAAIP2016';

$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = 'SELECT *
        FROM GoogleAnalytics';
        
$sqlTS = 'SELECT SUM(todaySold) AS todaySold, SUM(todayGross) AS todayGross, dateToday
        FROM TicketMasterSales
        GROUP BY dateToday';

$sqlBroadcast = $sqlAS = 'SELECT * 
		  FROM MediaSpendBroadcast';       
        
$sqlAS = 'SELECT * 
		  FROM MediaSpendWeeklyTotalAndYearlyTotal';
		  
$sqlWv = 'SELECT sum(websiteVisits) as lastWeekVisits FROM GoogleAnalytics
WHERE (date="2/21/16" OR date="2/22/16" OR date="2/23/16" OR date="2/24/16" OR date="2/25/16" OR date="2/26/16" OR date="2/27/16")';

$sqlNf = 'SELECT  (sum(SproutTwitter.newFollowers) + sum(SproutFacebook.newFollowers) + sum(TapAnalyticsIGFollowers.newFollowers)) as Total
FROM SproutTwitter
INNER JOIN SproutFacebook ON SproutTwitter.date = SproutFacebook.date
INNER JOIN TapAnalyticsIGFollowers ON SproutTwitter.date = TapAnalyticsIGFollowers.date
WHERE (SproutTwitter.date="2/21/16" OR SproutTwitter.date="2/22/16" OR SproutTwitter.date="2/23/16" OR SproutTwitter.date="2/24/16" OR SproutTwitter.date="2/25/16" OR SproutTwitter.date="2/26/16" OR SproutTwitter.date="2/27/16")';

$sqlTsTotal = 'SELECT SUM(todayGross) AS todayGrosses
        FROM TicketMasterSales
        WHERE (dateToday="2/21/16" OR dateToday="2/22/16" OR dateToday="2/23/16" OR dateToday="2/24/16" OR dateToday="2/25/16" OR dateToday="2/26/16" OR dateToday="2/27/16")
   		 GROUP BY dateToday';

mysql_select_db('db_aaip_dash');

$retval = mysql_query( $sql, $conn );
$websiteVisits = array();
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_assoc($retval)){
   $websiteVisits[] = $row;
}
    
$salesRetval = mysql_query($sqlTS, $conn);
$ticketSales = array();   
if(! $salesRetval)
{
  die('Could not get data: ' . mysql_error());
}

while($row = mysql_fetch_assoc($salesRetval)){
	
   $ticketSales[] = $row;
}    

$bcRetval = mysql_query($sqlBroadcast, $conn);
$bcSpend = array();   
if(! $bcRetval)
{
  die('Could not get data: ' . mysql_error());
}

while($row = mysql_fetch_assoc($bcRetval)){
	
   $bcSpend[] = $row;
}   

$spendRetval = mysql_query($sqlAS, $conn);
$adSpend = array();   
if(! $spendRetval)
{
  die('Could not get data: ' . mysql_error());
}

while($row = mysql_fetch_assoc($spendRetval)){
	
   $adSpend[] = $row;
}

$wvRetval = mysql_query($sqlWv, $conn);
$wVisitsSum = array();
if(! $wvRetval)
{
  die('Could not get data: ' . mysql_error());
}

while($row = mysql_fetch_assoc($wvRetval)){
	
   $wVisitsSum[] = $row;
}

$NfRetval = mysql_query($sqlNf, $conn);
$nFollowersSum = array();
if(! $NfRetval)
{
  die('Could not get data: ' . mysql_error());
}

while($row = mysql_fetch_assoc($NfRetval)){
	
   $nFollowersSum[] = $row;
}

$tstRetval = mysql_query($sqlTsTotal, $conn);
$tsSum = 0;
if(! $tstRetval)
{
  die('Could not get data: ' . mysql_error());
}

while($row = mysql_fetch_assoc($tstRetval)){
	
   $tsSum = $tsSum + $row["todayGrosses"];
}
//echo $tsSum;   

mysql_close($conn);
?>



<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>AAIP Dashboard</title>

    <!-- Bootstrap Core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="../dist/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
    
    <!-- DatePicker CSS -->
    <link rel="stylesheet" href="../dist/css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="../dist/css/datepicker.css">

    <!-- Morris Charts CSS -->
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

        <!-- DatePicker CSS -->
    <link rel="stylesheet" href="../dist/css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="../dist/css/datepicker.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <!-- Morris controller.js -->
    <script src="../datasource/rest.js" type="text/javascript"></script>
    <script src="../controller/controller.js" type="text/javascript"></script>


    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- controller.js -->
    <!--<script src="../datasource/rest.js" type="text/javascript"></script>-->
    <!--<script src="../controller/controller.js" type="text/javascript"></script>-->
    
    <!-- controller.js -->
    <script src="../datasource/rest.js" type="text/javascript"></script>
    <script src="../controller/controller(FlotCharts).js" type="text/javascript"></script>


</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <img src="../img/aaip_icon.jpg" align="left">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">An American in Paris Dashboard</a>
            </div>
            <!-- /.navbar-header -->
			<ul class="nav navbar-top-links navbar-left">
                <li>
            		<li>
                        <a href="ticket-sales.php">Ticket Sales Dashboard</a>
                    </li>
                    <li>
						<a href="adspend.php">Ad Spending Statistics Dashboard</a>
					</li>
                    <li>
                        <a href="website.php">Web Statistics Dashboard</a>
                    </li>
                    <li>
                        <a href="social-media.php">Social Media Dashboard</a>
                    </li>
                    <li>
                    <ul class="nav navbar-top-links">
                        <li class="dropdown">
		                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
		                        <i class="fa fa-users fa-fw"></i> Social Media Sub Dashboards  <i class="fa fa-caret-down"></i>
		                    </a>
		                    <ul class="dropdown-menu dropdown-user">
                                <li>
                                    <a href="facebook.php"><i class="fa fa-facebook fa-fw"></i> Facebook Dashboard</a>
                                </li>
                                <li>
                                    <a href="instagram.php"><i class="fa fa-instagram fa-fw"></i> Instagram Dashboard</a>
                                </li>
                                <li>
                                    <a href="twitter.php"><i class="fa fa-twitter fa-fw"></i> Twitter Dashboard</a>
                                </li>
		                    </ul>
		                    <!-- /.dropdown-user -->
		                </li>
                	</ul>
                    <!-- /.nav-second-level -->
                </li>
            </ul>

            <ul class="nav navbar-top-links navbar-right">
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.php"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
        </nav>

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">An American in Paris Dashboard</h1>
                    

                    <div id="topBarStats"> 
	                    <h3>Statistics from 2/21/16 - 2/27/16:</h3> 
	                    <p class="pull-right" style="font-style: italic">Data last updated on 2/27/16 </p> 
                    <hr >
	                </div>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-4 col-md-8">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-ticket fa-5x"></i>

                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">
	                                     $<?php echo number_format($tsSum); ?> <i class="fa fa-long-arrow-down"></i>
                                    </div>
                                    <div class="panel-subheader">Gross Tickets Sales</div>
                                </div>
                                
                            </div>
                        </div>
                        <a href="ticket-sales.php">
                            <div class="panel-footer">
                                <span class="pull-left">View Ticket Sales Dashboard</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="panel panel-green">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-bar-chart fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge">
										<?php echo number_format($wVisitsSum[0]["lastWeekVisits"]); ?> <i class="fa fa-long-arrow-down"></i> 
                                    </div>
                                    <div class="panel-subheader">Website Visits</div>
                                </div>
                            </div>
                        </div>
                        <a href="website.php">
                            <div class="panel-footer">
                                <span class="pull-left">View Web Statistics Dashboard</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
              </div>
                <div class="col-lg-4 col-md-8">
                    <div class="panel panel-yellow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-group fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div class="huge"><?php echo number_format($nFollowersSum[0]["Total"]); ?> <i class="fa fa-long-arrow-down"></i>
                                    </div>
                                    <div class="panel-subheader">New Followers</div>
                                </div>
                            </div>
                        </div>
                        <a href="social-media.php">
                            <div class="panel-footer">
                                <span class="pull-left">View Social Media Dashboard</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Website Visits x Tickets Sold (Gross)
                            <div class="pull-right">
                                <form id="WVTSForm">
                                <div class="btn-group">
                                    <div id="sandbox-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="WVTSstartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="WVTSendDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="visits-sales">
                                    <div id="flotcontainer" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Website Visits x Tickets Sold (Gross) x Media Spend
                            <div class="pull-right">
                                <form id="WVTSMSForm">
                                <div class="btn-group">
                                    <div id="sandbox-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="WVTSMSstartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="WVTSMSendDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form>                            
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="sales-visits-commercials">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- Sales Adspend Commercials -->
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Media Spend (Total) x Ticket Sales (Gross)
                            <div class="pull-right">
                                <form id="TSMSForm">
                                <div class="btn-group">
                                    <div id="sandbox-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="TSMSstartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="TSMSendDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Update">
                                </div>
                                </form> 
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <!-- <div class="flot-chart-content" id="flot-line-chart"></div> -->
                                <div class="flot-chart-content" id="sales-adspend-commercials">
                                    <div id="flotcontainerAds" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->


        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../bower_components/raphael/raphael-min.js"></script>
    <script src="../bower_components/morrisjs/morris.min.js"></script>
    <script src="../js/morris-data.js"></script>
    
    <!-- Flot Charts JavaScript -->
    <script src="../bower_components/flot/excanvas.min.js"></script>
    <script src="../bower_components/flot/jquery.flot.js"></script>
    <script src="../bower_components/flot/jquery.flot.pie.js"></script>
    <script src="../bower_components/flot/jquery.flot.resize.js"></script>
    <script src="../bower_components/flot/jquery.flot.time.js"></script>
    	<script src="../bower_components/flot/jquery.flot.stack.js"></script>
    <script src="../bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
    
<!--     FLOT AXIS LABELS -->
    <script src="../bower_components/flot-axislabels/jquery.flot.axislabels.js"></script>
    
    <script type="text/javascript">
        setTimeout(function(){
        //$TODO$ nasty hack
            $(document).ready(function() {
	            var webVisits = <?php echo json_encode($websiteVisits); ?>;
	            var tixSales = <?php echo json_encode($ticketSales); ?>;
	            var adSpend = <?php echo json_encode($adSpend); ?>;
	            var bcSpend = <?php echo json_encode($bcSpend); ?>;
	            console.log(adSpend);
				console.log(tixSales);
                var controller = new flotController();
                controller.renderWVTSMS("2/21/2016", "2/27/2016", webVisits, tixSales, bcSpend);
                controller.renderCoreGraph("2/21/2016", "2/27/2016", webVisits, tixSales);
                controller.renderTSMS("2/21/2016", "2/27/2016", tixSales, adSpend);
            });
        }, 3000);
    </script>
    
    <!--DATEPICKER JS -->
    <script src="../js/bootstrap-datepicker.js"></script>
    <script type="text/javascript">
            // When the document is ready
            $(document).ready(function () {
                $('#sandbox-container .input-daterange').datepicker({
                    startDate: "01/01/2016",
                    //endDate: "02/2/2016"
                });
            });
    </script>

	


    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>
