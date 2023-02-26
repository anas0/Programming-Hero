const loadPhone = async(searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit);
}

const displayPhone = (phones, dataLimit) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';

    // Display 10 phones 
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }else{
        showAll.classList.add('d-none');
    }

    // Display No Phone Found
    const noFoundMessage = document.getElementById('no-found-message');
    if(phones.length === 0){
        noFoundMessage.classList.remove('d-none');
    }else{
        noFoundMessage.classList.add('d-none');
    }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top w-50 p-3" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${phone.brand}</h3>
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.slug}</p>
                    <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#loadPhoneDetails">Show Details</button>
                </div>
            </div>
        `;

        phoneContainer.appendChild(phoneDiv);
    });
    // stop loader
    toggleSpinner(false);
}

const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    loadPhone(searchText, dataLimit);
}

document.getElementById('btn-search').addEventListener('click', function(){
    // Start loader
    processSearch(10);
});

// Search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        processSearch(10);
    }
});

const toggleSpinner = isLoading => {
    const loader = document.getElementById('loader');

    if(isLoading){
        loader.classList.remove('d-none');
    }else{
        loader.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function(){
    processSearch();
});

const loadPhoneDetails = async(id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}
// Bluetooth: "5.2, A2DP, LE, aptX HD"
// ​​
// GPS: "Yes, with A-GPS. Up to dual-band: GLONASS (1), BDS (2), GALILEO (2), QZSS (2), NavIC"
// ​​
// NFC: "Yes"
// ​​
// Radio: "No"
// ​​
// USB: "USB Type-C 2.0, USB On-The-Go"
// ​​
// WLAN: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct, hotspot"

const displayPhoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('loadPhoneDetailsLabel');
    modalTitle.innerText = phone.name; 
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
        <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Release Date Found!'} </p>
        <p>Bluetooth: ${phone.others.Bluetooth ? phone.others.Bluetooth : 'No Bluetooth Found!'} </p>
        <p>GPS Date: ${phone.others.GPS ? phone.others.GPS : 'No GPS Found!'} </p>
        <p>NFC Date: ${phone.others.NFC ? phone.others.NFC : 'No NFC Found!'} </p>
        <p>Radio Date: ${phone.others.Radio ? phone.others.Radio : 'No Radio Found!'} </p>
        <p>USB Date: ${phone.others.USB ? phone.others.USB : 'No USB Found!'} </p>
        <p>WLAN Date: ${phone.others.WLAN ? phone.others.WLAN : 'No WLAN Found!'} </p>
    `; 
}


loadPhone('oppo');