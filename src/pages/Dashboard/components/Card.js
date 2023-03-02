import LossIcon from '../../../assets/icons/loss.png';
import ProfitIcon from '../../../assets/icons/profit.png';

export default function Card({ title, value, gains, detail, noComparison = false }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <span>
        {value}

        {!noComparison && (
          <span className={gains > 0 ? 'profit' : 'loss'}>
            {gains > 0 ? `+${gains}` : `${gains}`}%
            <img src={gains > 0 ? ProfitIcon : LossIcon} alt="" />
          </span>
        )}
      </span>

      <small>{!noComparison && `Comparado à (${detail})`}</small>
    </div>
  )
}