const FilterGroup = ({ onRatingClick, dynamicItemClass }) => {
  return (
    <ul className="align_flex_center movie_filter">
      <li className={dynamicItemClass(6)} onClick={() => onRatingClick(6)}>
        6+ Star
      </li>
      <li className={dynamicItemClass(7)} onClick={() => onRatingClick(7)}>
        7+ Star
      </li>
      <li className={dynamicItemClass(8)} onClick={() => onRatingClick(8)}>
        8+ Star
      </li>
    </ul>
  );
};

export default FilterGroup;
