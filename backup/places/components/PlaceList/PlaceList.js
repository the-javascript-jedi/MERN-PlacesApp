import React from "react";
import Card from "../../../shared/components/UIElements/Card/Card";
import PlaceItem from "../PlaceItem/PlaceItem";
import "./PlaceList.css";
const PlaceList = (props) => {
  // if no places return empty places message
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No Places found. Maybe Create One?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className='place-list'>
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creatorId}
            coordinates={place.location}
          />
        );
      })}
    </ul>
  );
};
export default PlaceList;
