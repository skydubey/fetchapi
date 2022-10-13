console.log('Fetch Api Introduction')

let mybtn = document.getElementById('myBtn');
let content = document.getElementById('content');
let pincode = document.getElementById('pincode');


function getData() {
    url = `https://api.zippopotam.us/IN/${pincode.value}`;
    // url = `https://api.zippopotam.us/IN/380026`;
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {

        if (pincode.value.length < 6 || pincode.value.length > 6) {
            alert("Please Enter Correct Pincode");
        }

        if (Object.keys(data).length === 0) {
            alert("Data not found");
            document.getElementById('area').innerText = "";
            document.getElementById('state').innerText = "";
            document.getElementById('country').innerText = "";
            document.getElementById('postcode').innerText = "";
            document.getElementById('latitude').innerText = "";
            document.getElementById('longitude').innerText = "";


        }


        let placesLength = data.places.length;
        let area = data.places[0]['place name'];
        let state = data.places[0].state;
        // let area2 = data.places[1]['place name'];
        let latitude = data.places[0].latitude;
        // let latitude2 = data.places[1].latitude;
        let longitude = data.places[0].longitude;
        // let longitude2 = data.places[1].longitude;
        let postcode = data['post code'];

        let country = data.country;

        console.log(area);
        console.log(state);
        // console.log(area2);
        console.log(latitude);
        console.log(longitude);
        console.log(country);
        console.log(placesLength);
        console.log(pincode);
        console.log(data);
        console.log(data.places[0]);

        if (placesLength > 1) {
            let area2 = data.places[1]['place name']
            // let area3 = data.places[2]['place name']

            document.getElementById('area').innerText = area + " , " + area2;
        }

        else {
            document.getElementById('area').innerText = area;

        }
        document.getElementById('state').innerText = state;
        document.getElementById('country').innerText = country;
        document.getElementById('postcode').innerText = pincode.value;
        document.getElementById('latitude').innerText = latitude;
        document.getElementById('longitude').innerText = longitude;


    })
}
// getData();
