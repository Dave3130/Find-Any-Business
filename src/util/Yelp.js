const api = 'VzkT_Zh6a2wLUGwpLJ1dlqVT43qwjtW6KYRXYMjNqkV45LJeW7cWvD5J-o_gGNRx4RWl3cEztErDn9bD3zOBSOrYdHAblDznGpPrB2f1mHh6ntl1lalzxY-qefefXnYx';

const Yelp = {
    search(term, location, sortBy) {

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_API}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));

            }
        });

    }
};

export default Yelp;
