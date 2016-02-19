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
$sql = 'SELECT date, websiteVisits
        FROM GoogleAnalytics';
        
// $sql2 = 'SELECT date, clicks, impressions
//         FROM DFAAds';
        
$sql2 = 'SELECT SUM(impressions) AS impressions, SUM(clicks) AS clicks, date
        FROM DFAAds
        GROUP BY date';
        
$sql3 = 'SELECT SUM(impressions) AS impressions, SUM(clicks) AS clicks, date
        FROM DFASites
        GROUP BY date';

mysql_select_db('db_aaip_dash');
$retval = mysql_query( $sql, $conn );
$retval2 = mysql_query( $sql2, $conn );
$retval3 = mysql_query( $sql3, $conn );
$ticketSalesArray = array();
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_assoc($retval)){
   $websiteVisitsArray[] = $row;
}    
while($row = mysql_fetch_assoc($retval2)){
   $ciAdsArray[] = $row;
}   
while($row = mysql_fetch_assoc($retval3)){
   $ciSitesArray[] = $row;
}  

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
    <script src="../controller/controller.js" type="text/javascript"></script>
    <script src="../controller/controller(FlotCharts).js" type="text/javascript"></script>
    <script type='text/javascript' src="../controller/flot-axislabels.js"></script>


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
            <!-- /.navbar-top-links -->

             <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <a href="index.php">Main Dashboard</a>
                        </li>
                        <li>
                                <li>
									<a href="adspend.php">Ad Spending Statistics Dashboard</a>
								</li>
                                <li>
                                    <a href="website.php">Web Statistics Dashboard</a>
                                </li>
                                
                                <li>
                                    <a href="ticket-sales.php">Ticket Sales Dashboard</a>
                                </li>
                                <li>
                                    <a href="social-media.php">Social Media Dashboard</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-users fa-fw"></i> Social Media Sub Dashboards<span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                    <li>
                                        <a href="facebook.php"><i class="fa fa-facebook fa-fw"></i> Facebook Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="instagram.php"><i class="fa fa-instagram fa-fw"></i> Instagram Dashboard</a>
                                    </li>

                                    <li>
                                        <a href="twitter.php"><i class="fa fa-twitter fa-fw"></i> Twitter Dashboard</a>
                                    </li>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        
                        <!-- TABLES TABLES TABLES -->
                        
                        <!--<li>-->
                        <!--    <a href="tables.html"><i class="fa fa-table fa-fw"></i> Tables</a>-->
                        <!--</li>-->
                        
                        
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <div id="page-wrapper">

                        <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Web Statistics</h1>
                </div>
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Website Visits
                            <div class="pull-right">
                                <form id="WVForm">
                                <div class="btn-group">
                                    <div id="sandbox-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="WVstartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="WVendDate"/>
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
                                <div class="flot-chart-content" id="visits">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
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
                            Ads: Impressions x Clicks
                            <div class="pull-right">
                                <form id="CIForm">
                                <div class="btn-group">
                                    <div id="sandbox-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="CIstartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="CIendDate"/>
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
                                <div class="flot-chart-content" id="ads-impressions-clicks">
                                    <div id="flotcontainerSales" style="height:400px; text-align: center; margin:0 auto;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                


                <!--    <div class="panel panel-default">-->
                <!--        <div class="panel-heading">-->
                <!--            <i class="fa fa-bar-chart-o fa-fw"></i> Mentions By Source-->
                <!--            <div class="pull-right">-->
                <!--                <div class="btn-group">-->
                <!--                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">-->
                <!--                        Actions-->
                <!--                        <span class="caret"></span>-->
                <!--                    </button>-->
                <!--                    <ul class="dropdown-menu pull-right" role="menu">-->
                <!--                        <li><a href="#">Action</a>-->
                <!--                        </li>-->
                <!--                        <li><a href="#">Another action</a>-->
                <!--                        </li>-->
                <!--                        <li><a href="#">Something else here</a>-->
                <!--                        </li>-->
                <!--                        <li class="divider"></li>-->
                <!--                        <li><a href="#">Separated link</a>-->
                <!--                        </li>-->
                <!--                    </ul>-->
                <!--                </div>-->
                <!--            </div>-->
                <!--        </div>-->
                        <!-- /.panel-heading -->
                <!--        <div class="panel-body">-->
                <!--            <div class="row">-->
                                <!--<div class="col-lg-0">-->
                                <!--    <div class="table-responsive">-->
                                <!--        <table class="table table-bordered table-hover table-striped">-->
                                <!--            <thead>-->
                                <!--                <tr>-->
                                <!--                    <th>#</th>-->
                                <!--                    <th>Date</th>-->
                                <!--                    <th>Time</th>-->
                                <!--                    <th>Amount</th>-->
                                <!--                </tr>-->
                                <!--            </thead>-->
                                <!--            <tbody>-->
                                <!--                <tr>-->
                                <!--                    <td>3326</td>-->
                                <!--                    <td>10/21/2013</td>-->
                                <!--                    <td>3:29 PM</td>-->
                                <!--                    <td>$321.33</td>-->
                                <!--                </tr>-->
                                <!--                <tr>-->
                                <!--                    <td>3325</td>-->
                                <!--                    <td>10/21/2013</td>-->
                                <!--                    <td>3:20 PM</td>-->
                                <!--                    <td>$234.34</td>-->
                                <!--                </tr>-->
                                <!--                <tr>-->
                                <!--                    <td>3324</td>-->
                                <!--                    <td>10/21/2013</td>-->
                                <!--                    <td>3:03 PM</td>-->
                                <!--                    <td>$724.17</td>-->
                                <!--                </tr>-->
                                <!--                <tr>-->
                                <!--                    <td>3323</td>-->
                                <!--                    <td>10/21/2013</td>-->
                                <!--                    <td>3:00 PM</td>-->
                                <!--                    <td>$23.71</td>-->
                                <!--                </tr>-->
                                <!--                <tr>-->
                                <!--                    <td>3322</td>-->
                                <!--                    <td>10/21/2013</td>-->
                                <!--                    <td>2:49 PM</td>-->
                                <!--                    <td>$8345.23</td>-->
                                <!--                </tr>-->
                                <!--                <tr>-->
                                <!--                    <td>3321</td>-->
                                <!--                    <td>10/21/2013</td>-->
                                <!--                    <td>2:23 PM</td>-->
                                <!--                    <td>$245.12</td>-->
                                <!--                </tr>-->
                                <!--                <tr>-->
                                <!--                    <td>3320</td>-->
                                <!--                    <td>10/21/2013</td>-->
                                <!--                    <td>2:15 PM</td>-->
                                <!--                    <td>$5663.54</td>-->
                                <!--                </tr>-->
                                <!--                <tr>-->
                                <!--                    <td>3319</td>-->
                                <!--                    <td>10/21/2013</td>-->
                                <!--                    <td>2:13 PM</td>-->
                                <!--                    <td>$943.45</td>-->
                                <!--                </tr>-->
                                <!--            </tbody>-->
                                <!--        </table>-->
                                <!--    </div>-->
                                    <!-- /.table-responsive -->
                                <!--</div>-->
                                <!-- /.col-lg-4 (nested) -->
                <!--                <div class="col-lg-12">-->
                <!--                    <div id="morris-bar-chart" height = "500px"></div>-->
                <!--                </div>-->
                                <!-- /.col-lg-8 (nested) -->
                <!--            </div>-->
                            <!-- /.row -->
                <!--        </div>-->
                        <!-- /.panel-body -->
                <!--    </div>-->
                    <!-- /.panel -->
                <!--</div>-->
                <!-- /.col-lg-8 -->
                <!--<div class="col-lg-4">-->
                <!--    <div class="panel panel-default">-->
                <!--        <div class="panel-heading">-->
                <!--            <i class="fa fa-pie-chart fa-fw"></i> Donut Chart Example-->
                <!--        </div>-->
                <!--        <div class="panel-body">-->
                <!--            <div id="morris-donut-chart"></div>-->
                <!--            <a href="#" class="btn btn-default btn-block">View Details</a>-->
                <!--        </div>-->
                        <!-- /.panel-body -->
                <!--    </div>-->
                    <!-- /.panel -->
                <!--</div>-->
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
    <script src="../bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
	<script src="../bower_components/flot-axislabels/jquery.flot.axislabels.js"></script>
    
    <script type="text/javascript">
        setTimeout(function(){
        //$TODO$ nasty hack
            $(document).ready(function() {
                var websiteVisitsData = <?php echo json_encode($websiteVisitsArray); ?>;
                var ciAdsData = <?php echo json_encode($ciAdsArray); ?>;
                var ciSitesData = <?php echo json_encode($ciSitesArray); ?>;
                console.log("here")
                //console.log(websiteVisitsData);
                var controller = new flotController();
                var controller2 = new Controller();
                // controller.renderCoreGraphWV();
                //controller.renderCoreGraphCI();
                controller.renderWVGraph("2/6/16", "2/12/16", websiteVisitsData);
                controller.renderCIAdsGraph(null, null, ciAdsData);
                controller2.renderDonutGraph();
            });
        }, 3000);
    </script>
    
    // <script type="text/javascript">
    //     setTimeout(function(){
    //     //$TODO$ nasty hack
    //     $(document).ready(function() {
    //     //         function getSlashDate(date) {
		  //    //  	var splitDate = date.split("/");
			 //    //   var year = "20"+splitDate[2]
			     
			 //    //   return (year+"/"+splitDate[0]+"/"+splitDate[1])
	   //    // 	}
	   //    var ticketSalesData = <?php echo json_encode($ticketSalesArray); ?>;
	   //    var controller = new flotController();
    //       var controller2 = new Controller();
	       
	            
	   //    console.log(ticketSalesData);
    //         });
    //     }, 2000);
    // </script>
    
    <!--DATEPICKER JS -->
    <script src="../js/bootstrap-datepicker.js"></script>
    <script type="text/javascript">
            // When the document is ready
            $(document).ready(function () {
                $('#sandbox-container .input-daterange').datepicker({
                    // daysOfWeekDisabled: "1,2,3,4,5,6",
                    // daysOfWeekHighlighted: "0",
                    startDate: "03/15/2015",
                    endDate: "02/20/2016"
                });
            });
    </script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>
