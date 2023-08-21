import {PropTypes} from 'prop-types';
import './InfoCard.css'

export function InfoCard(props){
  const category = props.category
  const theme = props.theme

  function checkCategory(state){
    if (state==='daily') return 'Yesterday'
    if (state==='weekly') return 'Last week'
    if (state==='monthly') return 'Last month'
  }

    return (
        <section className='infoCard' style={{background: `url(${theme.icon}) no-repeat 92% -2% var(${theme.color})`}}>
          <div className="infoDetails">
              <div className="infoTopRow">
                <h2 className='infoTitle'>{props.title}</h2>
                <button className='optionsButton'><img src="icon-ellipsis.svg"/></button>
              </div>
              <div className="infoBotRow">
                <p className='infoHours'>{props.current}hrs</p>
                <p className='infoDate'>{checkCategory(category)} - {props.previous}hrs</p>
              </div>
        </div>
      </section>
    )
}

InfoCard.propTypes = {
    title: PropTypes.string,
    theme: PropTypes.object,
    category: PropTypes.string,
    current: PropTypes.string,
    previous: PropTypes.string
};