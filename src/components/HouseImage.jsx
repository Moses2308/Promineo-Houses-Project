export default function HouseImage(props) {
  return (
    <div className="house__image">
      <img src={props.houseImg} alt={`img of ${props.owner}'s house`} />
    </div>
  );
}
