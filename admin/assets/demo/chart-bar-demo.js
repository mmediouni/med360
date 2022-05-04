// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
//Admin functions
function showAdminBarChart() {
  var categories = getAllObjects("categories");
var ctx = document.getElementById("myBarChartAdmin");
var myLineChart = new Chart(ctx, {
type: 'bar',
data: {
  labels: categories,
  datasets: [{
    label: "Revenue",
    backgroundColor: "rgba(2,117,216,1)",
    borderColor: "rgba(2,117,216,1)",
    data: categorieCount,
  }],
},
options: {
  scales: {
    xAxes: [{
      time: {
        unit: 'Categorie'
      },
      gridLines: {
        display: true
      },
      ticks: {
        maxTicksLimit: 20
      }
    }],
    yAxes: [{
      ticks: {
        min: 0,
        max: max_value,
        maxTicksLimit: max_value * 2
      },
      gridLines: {
        display: true
      }
    }],
  },
  legend: {
    display: false
  }
}
});
}
function categorieCountTab() {
  var categories = getAllObjects("categories");
  categorieNumberTab =[];
for (let i = 0; i < categories.length; i++) {
  categorieNumber = countProUsersByCategorie(i);
  categorieNumberTab.push(categorieNumber);
}
return categorieNumberTab
}
function countProUsersByCategorie(categorieName) {
  var count = 0;
  var proUsers = getAllObjects("proUsers");

  for (let i = 0; i < proUsers.length; i++) {
     
     if (proUsers[i].categorie == categorieName) {
      count = count+1;
     }
      
  }
  return count ;
}
var categorieCount = categorieCountTab()
var max_value = Math.max(...categorieCount);

//-----------------------------------------------------------------
//User functions

function showUserBarChart(params) {
  
}



var loggedUser = getAllObjects("loggedUser");
switch (loggedUser.role) {
  case "pro":
    viewProUserRdv();
    displayLoggedUser();
    displayProUserInfoForEdit();
    break;
  case "user":
    
    // Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["hhhhhh 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 380451],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
    break;
  case "admin":
    showAdminBarChart();
    viewDoctors();
    viewUsers();
    viewAllRdvADMIN();
    
    break;
  default:
    location.replace("../index.html");
    break;
}


