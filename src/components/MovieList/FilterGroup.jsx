const FilterGroup = ({ onRatingClick, dynamicItemClass, ratings }) => {
  return (
    <ul className="align_flex_center movie_filter">
      {ratings.map((rating) => (
        <li
          className={dynamicItemClass(rating)}
          onClick={() => onRatingClick(rating)}
          key={rating}
        >
          {rating}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
