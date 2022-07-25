import './dashbroad.css';
import Cloudy from '../../images/cloudy.png';
import Pressure from '../../images/gauge.png';
import Wind from '../../images/wind.png';
import Humidity from '../../images/drop.png';
import Snow from '../../images/snow.png';
import Moon from '../../images/moon.png';
import Cloudy2 from '../../images/cloudy2.png';

const DashBroad = ({weather}) => {
    const getVisual = () => {
        switch (weather.main) {
            case 'Clouds':
                return (
                    <>
                        <img alt='visualize' src={Cloudy} className='weather-visualize' />
                        <img alt='visualize' src={Moon} className='weather-visualize' />
                        <img alt='visualize' src={Cloudy} className='weather-visualize' />
                    </>
                )

            default: return null;
        }
    }

    return (
        <div className='dashbroad'>
            <div className="temp-description">
                <div className='main-info'>
                    <div className='temperature'>{weather.temp}°C</div>
                    <span className='feel-like'>Feel like: {weather.feel_like}°C</span><br />
                    <span className='main-weather'>{weather.main}</span>
                </div>
                <div className='visualize'>
                    {getVisual()}
                </div>
            </div>
            <div className='extra-info'>
                <div className='weather-info'><img src={Humidity} alt='extra' className='extra__info__icon' />{weather.humidity}%</div>
                <div className='weather-info'><img src={Wind} alt='extra' className='extra__info__icon' />{weather.wind} km/h</div>
                <div className='weather-info'><img src={Pressure} alt='extra' className='extra__info__icon' />{weather.pressure} Pa</div>
            </div>
        </div>
    );
}

DashBroad.defaultProps = {
    weather: {
        main: 'Clouds',
        temp: 34,
        feel_like: 41,
        temp_min: 34,
        temp_max: 34,
        pressure: 999,
        humidity: 80,
        wind: 2.46
    }
}

export default DashBroad;
