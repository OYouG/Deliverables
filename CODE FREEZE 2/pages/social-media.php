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
        FROM TapAnalyticsIGFollowers';
        
$fbSql = 'SELECT *
        FROM SproutFacebook';
        
$twSql = 'SELECT *
        FROM SproutTwitter';

mysql_select_db('db_aaip_dash');

$retval = mysql_query( $sql, $conn );
$IGFollowers = array();
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_assoc($retval)){
   $IGFollowers[] = $row;
}

$fbRetval = mysql_query( $fbSql, $conn );
$FBFollowers = array();
if(! $fbRetval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_assoc($fbRetval)){
   $FBFollowers[] = $row;
}

$twRetval = mysql_query( $twSql, $conn );
$TWFollowers = array();
if(! $twRetval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_assoc($twRetval)){
   $TWFollowers[] = $row;
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
    <!-- controller.js -->
    <script src="../datasource/rest.js" type="text/javascript"></script>
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
                    <h1 class="page-header">Social Media Dashboard</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <!--TICKET SALES CHART-->
                <!--<div class="col-lg-12">-->
                <!--    <div class="panel panel-default">-->
                <!--        <div class="panel-heading">-->
                <!--            <i class="fa fa-line-chart fa-fw"></i> Weekly Grosses-->
                <!--            <div class="pull-right">-->
                <!--               <form id="salesForm">-->
                <!--               <div class="btn-group">-->
                <!--                    <div id="sandbox-container">-->
                <!--                        <div class="input-daterange input-group" id="datepicker">-->
                <!--                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="startDate"/>-->
                <!--                            <span class="input-group-addon">to</span>-->
                <!--                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="endDate"/>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
                <!--                <div class="btn-group">-->
                <!--                    <input class="button" type="submit" value="Submit">-->
                <!--                </div>-->
                <!--                </form>-->
                <!--            </div>-->
                <!--        </div>-->
                         <!--/.panel-heading -->
                <!--        <div class="panel-body">-->
                <!--            <div id="morris-line-chart"></div>-->
                <!--        </div>-->
                         <!--/.panel-body -->
                <!--    </div>-->
                <!--</div>-->
                
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-line-chart fa-fw"></i> New Followers
                            <div class="pull-right">
                                <!--<div class="btn-group">-->
                                    <!--<button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">-->
                                    <!--    Date 1-->
                                    <!--    <span class="caret"></span>-->
                                    <!--</button>-->
                                    <!--<ul class="dropdown-menu pull-right" role="menu">-->
                                    <!--    <li><a href="#">Select First Date</a>-->
                                    <!--    </li>-->
                                    <!--</ul>-->
                                <!--</div>-->
                                
                               <form id="followerssalesForm">
                               <div class="btn-group">
                                     <!--ATTEMPT AT GETTING DATERANGE -->
                                    <!--<div class="sandbox-container">-->
                                    <!--    <div class="hero-unit">-->
                                    <!--        <input  type="text" placeholder="click to show datepicker"  id="sandbox-container">-->
                                    <!--    </div>-->
                                    <!--</div>  -->
                                    <div id="sandbox-container">
                                        <div class="input-daterange input-group" id="datepicker">
                                            <input type="text" placeholder = "start date" class="input-sm form-control" name="start" id="followersstartDate"/>
                                            <span class="input-group-addon">to</span>
                                            <input type="text" placeholder = "end date" class="input-sm form-control" name="end" id="followersendDate"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-group">
                                    <input class="btn btn-success btn-sm" type="submit" value="Submit">
                                    <!--<input type="submit"><button type="button" class="btn btn-success btn-xs" id="salesButton">Update</button>-->
                                </div>
                                </form>
                                
                            </div>
                        </div>
                         <!--/.panel-heading -->
                        <div class="panel-body">
                            <div id="followers-line-chart"></div>
                        </div>
                         <!--/.panel-body -->
                    </div>
                </div>
                
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

    
        <script type="text/javascript">
        setTimeout(function(){
        //$TODO$ nasty hack
        $(document).ready(function() {
            var controller = new Controller();
             var igFollows = <?php echo json_encode($IGFollowers); ?>;
             var fbFollows = <?php echo json_encode($FBFollowers); ?>;
             var twFollows = <?php echo json_encode($TWFollowers); ?>;
            controller.renderNewFollowers("2/22/2016", "2/28/2016", igFollows,fbFollows,twFollows,"all");
            //controller.renderAAIPSaleGraph(null,null);
            console.log("BLASHHLASF");
            });
        }, 0);
    </script>


    <!--DATEPICKER JS -->
    <script src="../js/bootstrap-datepicker.js"></script>


    
    <script type="text/javascript">
            // When the document is ready
            $(document).ready(function () {
                $('#sandbox-container .input-daterange').datepicker({
                    startDate: "01/01/2016",
                    endDate: "02/29/2016"
                });
            });
    </script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

</body>

</html>
