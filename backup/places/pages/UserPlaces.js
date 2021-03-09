import React from "react";
// only usable in functional components
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList/PlaceList";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world!",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1272532349151072262/kBEZiWIQ.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world!",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1272532349151072262/kBEZiWIQ.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  // Gives us access to the segments in the route - /:userId/places
  const userId = useParams().userId;
  // filter the array to contain only the created.userId places
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
