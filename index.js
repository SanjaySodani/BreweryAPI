window.onload = function () {
    const myDiv = document.querySelector("#dataHere");
    const button = document.querySelector("#btn-get");

    button.addEventListener("click", getData);

    async function getData() {
        let response = await fetch("https://api.openbrewerydb.org/breweries");
        if (response.ok) {
            let data = await response.json();
            myDiv.innerHTML = "";
            for (let i of data) {
                let na = `<span class="text-muted">Not available</span>`;
                let address = na;
                if (i.street !== null) {
                    address = i.street;
                    if (i.address_2 !== null) {
                        address = ", " + i.address_2
                    }
                    if (i.address_2 !== null) {
                        address = ", " + i.address_2
                    }
                }

                let city = na;
                if (i.city !== null) {
                    city = i.city;
                }

                let state = na;
                if (i.state !== null) {
                    state = i.state;
                }

                let postal_code = na;
                if (i.postal_code !== null) {
                    postal_code = i.postal_code;
                }

                let country = na;
                if (i.country !== null) {
                    country = i.country;
                }

                let website_url = na;
                if (i.website_url !== null) {
                    website_url = `<a href="${i.website_url}" class="card-link">${i.website_url}</a>`
                }

                let phone = na;
                if (i.phone !== null) {
                    phone = i.phone;
                }

                myDiv.innerHTML += `<div class="col my-2"><div class="card myCard shadow">
                        <div class="card-body">
                        <h5 class="card-title">${i.name}</h5>
                        <h6 class="card-subtitle mb-3 text-muted">Brewery type: ${i.brewery_type}</h6>
                        <p class="card-text mb-0">Address: ${address}</p>
                        <p class="card-text mb-0">City: ${city}</p>
                        <p class="card-text mb-0">State: ${state}</p>
                        <p class="card-text mb-0">Postal code: ${postal_code}</p>
                        <p class="card-text mb-3">Country: ${country}</p>
                        <p class="card-text mb-0">Website: ${website_url}</p>
                        <p class="card-text mb-1">Phone: ${phone}</p>
                        </div>
                    </div></div>`
            }
        }
        else {
            myDiv.innerHTML = `<h3 class="font-weight-normal text-danger text-center">An error occurred!</h3>`;
        }
    }
}
