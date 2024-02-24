// const { Html5QrcodeScanner } = require("html5-qrcode");
const camera = document.querySelector("#html5-qrcode-button-camera-start")
// , denied = document.querySelector(".denied")
// , granted = document.querySelector(".granted")
const scanner =new Html5QrcodeScanner('reader',{
    qrbox:{
        width: 300,
        height: 300
    }, 
     fps: 20,
})

scanner.render(success, error)

function success(result){
   scanner.pause(true)
    console.log(result)

    const data = {
        "idNo": result,
        "unitCode": $(".options").val()
    }
    $.ajax({
        type:"GET",
        contentType: "application/json",
        url:url+"all/scan/"+result,
        success: function(data){
            if(data.fail === "exceeded"){
                alert("qr code unknown")
                document.querySelector(".resume").click()
                return;
            }
            console.log(data)

            var scaninfo = document.createElement('div');
            var html = '';

            html += '<h2>Product Information</h2>';
            html += '<p><strong>Model Name:</strong> ' + data.product.modelName + '</p>';
            html += '<p><strong>Company Name:</strong> ' + data.product.companyName + '</p>';
            html += '<p><strong>Year Released:</strong> ' + data.product.yearReleased + '</p>';
            html += '<p><strong>Version:</strong> ' + data.product.version + '</p>';
            html += '<p><strong>Tag:</strong> ' + data.product.tag + '</p>';
            html += '<p><strong>Operating System:</strong> ' + data.product.os + '</p>';
            html += '<hr>';
            html += '<h2>Company Information</h2>';
            html += '<p><strong>Username:</strong> ' + data.company.username + '</p>';
            html += '<p><strong>Tag:</strong> ' + data.company.tag + '</p>';
            html += '<p><strong>Licence No:</strong> ' + data.company.licenceNo + '</p>';
            html += '<p><strong>Year Registered:</strong> ' + data.company.yearRegistered + '</p>';
            html += '<p><strong>Founder:</strong> ' + data.company.founder + '</p>';
            html += '<p><strong>Current CEO:</strong> ' + data.company.currentCEO + '</p>';
            html += '<p><strong>Company Contact:</strong> ' + data.company.companyContact + '</p>';
            html += '<p><strong>Address:</strong> ' + data.company.adress + '</p>';
            html += '<hr>';
            html += '<p><strong>Scans Remaining:</strong> ' + data.scansRemaining + '</p>';

            scaninfo.innerHTML = html;
            document.querySelector(".results").innerHTML=""
            document.querySelector(".results").append(scaninfo);
        }
    })
    }
    


function error(){
    // console.log("there was a problem")
}

$(".back").click(()=>{history.back()})

function reload(){
    scanner.resume()
}