import {PropTypes} from 'prop-types';
import './InfoCard.css'

export function InfoCard(props){

  const theme = props.theme

    return (
        <section className='infoCard' style={{background: `url(${theme.icon}) no-repeat 92% -2% var(${theme.color})`}}>
          <div className="infoDetails">
              <div className="infoTopRow">
                <h2 className='infoTitle'>{props.title}</h2>
                <button className='optionsButton'><img src="icon-ellipsis.svg"/></button>
              </div>
              <div className="infoBotRow">
                <p className='infoHours'>{props.current}hrs</p>
                <p className='infoDate'>Last Week - {props.previous}hrs</p>
              </div>
        </div>
      </section>
    )
}

InfoCard.propTypes = {
    title: PropTypes.string,
    theme: PropTypes.object,
    current: PropTypes.string,
    previous: PropTypes.string
};