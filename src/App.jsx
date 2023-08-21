import { InfoCard } from './components/InfoCard'
import { useState } from 'react'
import data from '../data.json'
import './App.css'

function App() {
  const [category,setCategory] = useState('weekly')


  const handleClick = e =>{
    setCategory(e.target.id)
  }

  const setTheme = (element) =>{
    if (element.title==='Work') 
    return {'icon':'icon-work.svg','color': '--clr-primary-light-red'}
    if (element.title==='Play') 
    return {'icon':'icon-play.svg','color': '--clr-primary-soft-blue'}
    if (element.title==='Study') 
    return {'icon':'icon-study.svg','color': '--clr-primary-soft-red'}
    if (element.title==='Exercise') 
    return {'icon':'icon-exercise.svg','color': '--clr-primary-lime-green'}
    if (element.title==='Social') 
    return {'icon':'icon-social.svg','color': '--clr-primary-violet'}
    if (element.title==='Self Care') 
    return {'icon':'icon-self-care.svg','color': '--clr-primary-soft-orange'}
  }
  
  const evalCategory = (element)=>{
    if (category==='weekly')
      return {'current': element.timeframes.weekly.current,
    'previous':element.timeframes.weekly.previous}
    if (category==='daily')
      return {'current': element.timeframes.daily.current,
      'previous':element.timeframes.daily.previous}
    if (category==='monthly')
        return {'current': element.timeframes.monthly.current,
        'previous':element.timeframes.monthly.previous}
  }

  return (
    <main className='main'>
      <section className='introCard'>
        <div className="introTop">
          <img className='introImage' src="image-jeremy.png" alt="avatar" />
          <h1 className='introTitle'>Report for <span>Jeremy Robson</span></h1>
        </div>
        <ul className='introRow'>
          <li>
            <button id='daily' 
            className={category==='daily'?'introCategory active':'introCategory'}
            onClick={handleClick}>Daily</button>
          </li>
          <li>
            <button id='weekly' className={category==='weekly'?'introCategory active':'introCategory'}
            onClick={handleClick}>Weekly</button>
          </li>
          <li>
            <button id='monthly' className={category==='monthly'?'introCategory active':'introCategory'}
            onClick={handleClick}>Monthly</button>
          </li>
        </ul>
      </section>
      {data.map(item=>
      <InfoCard key={item.title} 
      title={item.title}
      theme={setTheme(item)} 
      category={category}
      current={`${evalCategory(item).current}`}
      previous={`${evalCategory(item).previous}`}/>)}
    </main>
  )
}

export default App