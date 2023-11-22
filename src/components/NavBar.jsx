import PropTypes from 'prop-types';

function NavBar({ onPreviousClick, onNextClick, hasPrevious, hasNext }) {
  return (
    <div className="NavBar">
      {hasPrevious && <button onClick={onPreviousClick}>Précédent</button>}
      {hasNext && <button onClick={onNextClick}>Suivant</button>}
    </div>
  );
}

NavBar.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
};

export default NavBar;
