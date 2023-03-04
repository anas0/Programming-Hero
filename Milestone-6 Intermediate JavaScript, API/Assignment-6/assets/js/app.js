const getAiUniverseHub = (dataLimit, sort) => {
    toggleSpinner(true);
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showAiUniverseHub(data.data.tools, dataLimit, sort));
}

const showAiUniverseHub = (data, dataLimit, sort) => {
    const displayUniverseHub = document.getElementById('display-universe-hub');
    displayUniverseHub.innerHTML = "";

    
    const seeMore = document.getElementById('see-more');
    
    if(sort){
        seeMore.classList.add('hidden');
        data.sort((a,b) => {
            return new Date(b.published_in) - new Date(a.published_in);
        });
    }else if(dataLimit && data.length > 6){
        data = data.slice(0, 6);
        seeMore.classList.remove('hidden');
    }else{
        seeMore.classList.add('hidden');
    }
    
        
    data.forEach(info => {
        const universeHubDiv = document.createElement('div');
            
        universeHubDiv.innerHTML = `
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="${info.image}" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    Features
                    </h2>
                    
                    <ul class="list-decimal py-3">
                        <li>${info.features[0]}</li>
                        <li>${info.features[1]}</li>
                        <li>${info.features[2]? info.features[2]: "Image search"}</li>
                    </ul>

                    <div class="border-b-2 border-neutral-200 mb-4">
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="...">
                            <h2 class="card-title">
                                ${info.name}
                            </h2>
                            <input type="date" value="${formatDate(info.published_in)}">
                        </div>
                        <div class=" flex justify-end content-end">
                            <label onclick="loadDetail('${info.id}')" for="my-modal" class="text-rose-500 cursor-pointer">&#8594;</label>
                        </div>
                    </div>
                </div>
            </div>
        `;

        displayUniverseHub.appendChild(universeHubDiv);

    });
    
    toggleSpinner(false);
}

document.getElementById('see-more').addEventListener('click', function(){
    getAiUniverseHub();
});

const toggleSpinner = isLoading => {
    const loader = document.getElementById('loader');

    if(isLoading){
        loader.classList.remove('hidden');
    }else{
        loader.classList.add('hidden');
    }
}

function formatDate(date) {
    let d = new Date(date);
    date = [
      d.getFullYear(),
      ('0' + (d.getMonth() + 1)).slice(-2),
      ('0' + d.getDate()).slice(-2)
    ].join('-');
    return (date);
}

document.getElementById('sort-by-date').addEventListener('click', function(){
    getAiUniverseHub(6, 'sort');
});



function loadDetail(id){
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
        .then(res => res.json())
        .then(data => displayDerail(data.data));
}

function displayDerail(data){
    // integrations.map(a=> (`<li>${a}</li>`)).join("")
    console.log(data);
    const universeHubDescription = document.getElementById('universe-hub-description');
    universeHubDescription.innerText = data.description;

    const universeHubPricing = document.getElementById('universe-hub-pricing');
    if(data.pricing){
        universeHubPricing.innerHTML = `
            <div class="text-green-700 font-bold"> <span>${data.pricing[0] ? data.pricing[0].price : 'Free of Cost'}</span>  <span>${data.pricing[0] ? data.pricing[0].plan : 'Basic'}</span> </div>
            <div class="text-orange-500 font-bold"> <span>${data.pricing[1] ? data.pricing[1].price : 'Free of Cost'}</span>  <span>${data.pricing[1] ? data.pricing[1].plan : 'Pro'}</span> </div>
            <div class="text-red-500 font-bold"> <span>${data.pricing[2] ? data.pricing[2].price : 'Free of Cost'}</span>  <span>${data.pricing[2] ? data.pricing[2].plan : 'Enterprise'}</span> </div>
        `;
    }else{
        universeHubPricing.innerHTML = `
            <div class="text-green-700 font-bold"> <span>Free of Cost</span>  <span>Basic</span> </div>
            <div class="text-orange-500 font-bold"> <span>Free of Cost</span>  <spanPro</span> </div>
            <div class="text-red-500 font-bold"> <span>Free of Cost</span>  <span>Enterprise</span> </div>
        `;
    }
     

    const universeHubFeatures = document.getElementById('universe-hub-features');
    universeHubFeatures.innerText = "";

    const feature = Object.values(data.features);

    for (let x in feature) {
        // Object to Array 
        const feature = Object.values(data.features);
        
        const universeHubFeaturesLi = document.createElement('li');
        universeHubFeaturesLi.innerText = feature[x].feature_name;

        universeHubFeatures.appendChild(universeHubFeaturesLi);
    }

    const universeHubIntegrations = document.getElementById('universe-hub-integrations');
        universeHubIntegrations.innerText = "";


    const integrations = data.integrations;

    if(integrations.length > 0){
        integrations.forEach(integration => {
            const universeHubIntegrationsLi = document.createElement('li');
            universeHubIntegrationsLi.innerText = integration;
    
            universeHubIntegrations.appendChild(universeHubIntegrationsLi);
        });
    }else{
        universeHubIntegrations.innerText = "No data Found";
    }
    

    const universeHubExample = document.getElementById('universe-hub-examples');
    universeHubExample.innerText = '';
    universeHubExample.innerHTML = `
        <h2 class="card-title text-xl">${data.input_output_examples? data.input_output_examples[0].input : 'Can you give any example?'}</h2>
        <p class="text-sm">${data.input_output_examples? data.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}
    `;
        
    const universeHubImageLink = document.getElementById('universe-hub-image-link');
    universeHubImageLink.innerText = '';
    universeHubImageLink.innerHTML = `
        <img id="universe-hub-image-link" src="${data.image_link[0]}" alt="img" class="rounded-xl w-64" />
    `;


    // Accuracy
    if(data.accuracy){
        const universeHubAccuracy = document.getElementById('universe-hub-accuracy');
        universeHubAccuracy.innerText = '';
        universeHubAccuracy.innerHTML = `<span class="bg-red-600 text-white px-2 py-1 rounded-lg text-small">${data.accuracy.score} accuracy</span>`;
    }else{
        console.log("no");
    }

}


getAiUniverseHub(6);