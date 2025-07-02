import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

function CityList({ isLoading, cities }) {
  if (isLoading) return <Spinner />;

  if (cities.length < 1)
    return (
      <Message message="Add your first city buy clicking on a cityon the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
