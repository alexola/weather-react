import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"; 

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayInAWeek, weekDays.length).concat(weekDays.slice(0, dayInAWeek));


  return( 
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0,7).map((item, index)=>
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                  <label className="day">
                    {forecastDays[index]}
                  </label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <lable className="min-max">
                     {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C 
                  </lable>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              
            </AccordionItemPanel>
          </AccordionItem>
        )}
      </Accordion>
    </>
  )
}

export default Forecast;

/*allowZeroExpand -> it allows the accordion to be completly close*/ 