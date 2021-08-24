import { gql } from "@apollo/client";

// query

export const ALL_USER_DATA = gql`
    query AllUserData {
        users {
            _id
            email
            password
        }
    }
`;

export const ALL_ITINERARY = gql`
    query AllItineraries {
        itineraries {
            _id
            UserId
            checkIn
            checkOut
            plans {
                day
                places {
                    name
                    locationId
                    location
                    latitude
                    longitude
                    rating
                    description
                    ranking
                    image
                    price
                }
            }
        }
    }
`;

export const ONE_ITINERARY = gql`
    mutation GetOneItinerary($_id: ID) {
        itinerary(_id: $_id) {
            _id
            UserId
            checkIn
            checkOut
            plans {
                day
                places {
                    name
                    locationId
                    location
                    latitude
                    longitude
                    rating
                    description
                    ranking
                    image
                    price
                }
            }
        }
    }
`;

// mutations

export const USER_REGISTER = gql`
    mutation Register($email: String, $password: String) {
        register(email: $email, password: $password) {
            email
        }
    }
`;

export const USER_LOGIN = gql`
    mutation Login($email: String, $password: String) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export const POST_ITINERARY = gql`
    mutation AddItinerary($title: String, $checkIn: String, $checkOut: String, $token: String) {
        postItinerary(title: $title, checkIn: $checkIn, checkOut: $checkOut, token: $token) {
            _id
            title
            checkIn
            checkOut
        }
    }
`;

export const INSERT_PLANS = gql`
    mutation InsertPlans($name: String, $locationId: String, $location: String, $latitude: String, $longitude: String, $rating: Float, $description: String, $image: String, $rating: Float, $day: String, $price: Float) {
        insertPlans(name: $name, locationId: $locationId, location: $location, latitude: $latitude, longitude: $longitude, rating: $rating, description: $description, image: $image, rating: $rating, day: $day, price: $price) {
            _id
            title
            checkIn
            checkOut
            plans {
                day
                places {
                    name
                    locationId
                    location
                    latitude
                    longitude
                    rating
                    description
                    image
                    price
                }
            }
        }
    }
`;

export const DELETE_ITINERARY = gql`
    mutation DeleteItinerary($_id: ID) {
        deleteItinerary(_id: $_id)
    }
`;
