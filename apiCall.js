const jwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InNyYW51ajAyQGdtYWlsLmNvbSIsImZ1bGxfbmFtZSI6Ik5hbWUgIiwidWlkIjoiT2VIWFpWRzJoZ1NucTFWVTJRUU02VjM0c2NiMiJ9.IbTejelxYsU6aQXa_MKvY2GdOLNCXxjupa9BZpUVqRQ"
const url = "https://api-v2.onfinance.in/"

const sendHttpRequest = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            resolve(xhr.response)
        };

        xhr.setRequestHeader("Authorization", jwtToken);
        xhr.send();
    })
    return promise
};


const generateReport = () => {
    var referer = document.getElementById("referer").value;
    const mainUrl = url + "admin/usercount?referee="+referer;
    const array = referer.split("_")
    const name=array[0]
    sendHttpRequest("GET", mainUrl).then(responseData => {
        console.log(responseData)
        $("#currentUsersSigned").html(responseData["Current User Signups Referred by "+name])
        $("#spamAccounts").html(responseData["Spam Accounts"])
        $("#eventStats").html(responseData["firebase_downloads_tracker"])
    });
};

