<!DOCTYPE html>
<html lang="en">

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

    <!-- DataTables CSS -->
    <link href="../bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="../bower_components/datatables-responsive/css/dataTables.responsive.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../bower_components/morrisjs/morris.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
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
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
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
                    <h1 class="page-header">Ad Spending Statistics</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <!-- /.col-lg-6 -->
               
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Quarterly Ad Spending
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Quarter</th>
                                            <th>Weekly Total</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, quarter, weeklyTotal, yearlyTotal FROM MediaSpendWeeklyTotalAndYearlyTotal";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$weekly = $row["weeklyTotal"];
											$yearly = $row["yearlyTotal"];
                                            echo "<tr><td><a href=\"#" . $row["quarter"] . "\">" . $row["quarter"] . "</a></td><td>$" . number_format($weekly) . "</td><td>$" . number_format($yearly) . "</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-6 -->
                
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <a name="Q1"></a>Q1 Media Spend
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Media Spend</th>
                                            <th>Total Spend</th>
                                            <th>% of Budget</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, mediaSpend, total, percentBudget FROM MediaSpend
                                                WHERE quarter = 'Q1'";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$total = $row["total"];
                                            echo "<tr><td>" . $row["mediaSpend"]. "</td><td>$" . number_format($total) . "</td><td>" . $row["percentBudget"]. "%</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                
                
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Q1 Media Spend: Broadcast Breakdown
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Total Spend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, name, startDate, endDate, total FROM MediaSpendBroadcast
                                                WHERE quarter = 'Q1'";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$total = $row["total"];
                                            echo "<tr><td>" . $row["name"]. "</td><td>" . $row["startDate"]. "</td><td>" . $row["endDate"]. "</td><td>$" . number_format($total) . "</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
            </div>
                
            <div class="row">
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <a name="Q2"></a>Q2 Media Spend
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Media Spend</th>
                                            <th>Total Spend</th>
                                            <th>% of Budget</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, mediaSpend, total, percentBudget FROM MediaSpend
                                                WHERE quarter = 'Q2'";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$total = $row["total"];
                                            echo "<tr><td>" . $row["mediaSpend"]. "</td><td>$" . number_format($total) . "</td><td>" . $row["percentBudget"]. "%</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                
                
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Q2 Media Spend: Broadcast Breakdown
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Total Spend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, name, startDate, endDate, total FROM MediaSpendBroadcast
                                                WHERE quarter = 'Q2'";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$total = $row["total"];
                                            echo "<tr><td>" . $row["name"]. "</td><td>" . $row["startDate"]. "</td><td>" . $row["endDate"]. "</td><td>$" . number_format($total) . "</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
            </div>
            <!-- /.row -->
            
            
            <div class="row">
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <a name="Q3"></a>Q3 Media Spend
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Media Spend</th>
                                            <th>Total Spend</th>
                                            <th>% of Budget</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, mediaSpend, total, percentBudget FROM MediaSpend
                                                WHERE quarter = 'Q3'";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$total = $row["total"];
                                            echo "<tr><td>" . $row["mediaSpend"]. "</td><td>$" . number_format($total) . "</td><td>" . $row["percentBudget"]. "%</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                
                
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Q3 Media Spend: Broadcast Breakdown
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Total Spend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, name, startDate, endDate, total FROM MediaSpendBroadcast
                                                WHERE quarter = 'Q3'";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$total = $row["total"];
                                            echo "<tr><td>" . $row["name"]. "</td><td>" . $row["startDate"]. "</td><td>" . $row["endDate"]. "</td><td>$" . number_format($total) . "</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
            </div>
            <!-- /.row -->
            
            <div class="row">
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <a name="Q4"></a>Q4 Media Spend
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Media Spend</th>
                                            <th>Total Spend</th>
                                            <th>% of Budget</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, mediaSpend, total, percentBudget FROM MediaSpend
                                                WHERE quarter = 'Q4'";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$total = $row["total"];
                                            echo "<tr><td>" . $row["mediaSpend"]. "</td><td>$" . number_format($total) . "</td><td>" . $row["percentBudget"]. "%</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                
                
                <div class="col-lg-6">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Q4 Media Spend: Broadcast Breakdown
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="table-responsive table-bordered">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Total Spend</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $dbhost = '50.62.209.119';
                                        $dbuser = 'aaipdashadmin';
                                        $dbpass = 'UCIAAIP2016';
                                        $conn = mysql_connect($dbhost, $dbuser, $dbpass);
                                        if(! $conn )
                                        {
                                          die('Could not connect: ' . mysql_error());
                                        }
                                        
                                        
                                        $sql = "SELECT *, name, startDate, endDate, total FROM MediaSpendBroadcast
                                                WHERE quarter = 'Q4'";
                                        mysql_select_db('db_aaip_dash');
                                        $retval = mysql_query( $sql, $conn );
                                        
                                        if(! $retval )
                                        {
                                          die('Could not get data: ' . mysql_error());
                                        }
                                        while($row = mysql_fetch_assoc($retval)){
											$total = $row["total"];
                                            echo "<tr><td>" . $row["name"]. "</td><td>" . $row["startDate"]. "</td><td>" . $row["endDate"]. "</td><td>$" . number_format($total) . "</td></tr>";
                                        }
                                        mysql_close($conn);
                                        ?> 

                                    </tbody>
                                </table>
                            </div>
                            <!-- /.table-responsive -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
            </div>
            <!-- /.row -->
   
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

    <!-- DataTables JavaScript -->
    <script src="../bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
    <script src="../bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../bower_components/raphael/raphael-min.js"></script>
    <script src="../bower_components/morrisjs/morris.min.js"></script>
    <script src="../js/morris-data.js"></script>

    <script type="text/javascript">
        setTimeout(function(){
        //$TODO$ nasty hack
        $(document).ready(function() {
            var controller = new Controller();
            //controller.renderTicketSaleGraph(null, null);
            controller.renderNewFollowers(null,null,"Twitter");
            //controller.renderAAIPSaleGraph(null,null);
            console.log("BLASHHLASF");
            });
        }, 2000);
    </script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
                responsive: true
        });
    });
    </script>

    <script src="../js/bootstrap-datepicker.js"></script>
    <script type="text/javascript">
            // When the document is ready
            $(document).ready(function () {
                $('#sandbox-container .input-daterange').datepicker({
                    startDate: "01/01/2016",
                    endDate: "01/31/2016"
                });
            });
    </script>

</body>

</html>