import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animation.css';
import Bcn from '../assets/images/Barcelona.jpg';
import London from '../assets/images/London.jpg';
import Paris from '../assets/images/Paris.webp';
import Madrid from '../assets/images/Madrid.jpg';
import Tokyo from '../assets/images/Tokyo.jpg';
import Lisboa from '../assets/images/Lisboa.jpg';
import Sydney from '../assets/images/Sydney.jpg';
import Venezia from '../assets/images/Venezia.jpg';
import Amsterdam from '../assets/images/Amsterdam.jpg';
import Berlin from '../assets/images/Berlin.jpg';
import LA from '../assets/images/LA.jpg';
import Athens from '../assets/images/Athens.jpg';


export default class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             content : [
                {
                    title: 'Barcelona',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Bcn
                },
                {
                    title: 'London',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: London
                },
                {
                    title: 'Paris',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Paris
                },
                {
                    title: 'Madrid',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Madrid
                },
                {
                    title: 'Tokyo',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Tokyo
                },
                {
                    title: 'Lisboa',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Lisboa
                },
                {
                    title: 'Sydney',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Sydney
                },
                {
                    title: 'Venezia',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Venezia
                },
                {
                    title: 'Amsterdam',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Amsterdam
                },
                {
                    title: 'Berlin',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Berlin
                },
                {
                    title: 'Los Angeles',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: LA
                },
                {
                    title: 'Athens',
                    description:
                    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                    image: Athens
                }
            ]
        }
    }
    
    render(){
        return (
            <div>
            <Slider className="slider-wrapper">
                <div className="silider-content">
                    <SliderContent  content={this.state.content} x="0" y="4" />
                </div>
                <div className="silider-content">
                    <SliderContent  content={this.state.content} x="4" y="8" />
                </div>
                <div className="silider-content">
                    <SliderContent  content={this.state.content} x="8" y="12" />
                </div>
            </Slider>
          </div>
      
        )
    }
}

export class SliderContent extends React.Component {
    render(){
        return (
            <div className="inner">
                {this.props.content.slice(this.props.x,this.props.y).map((item, index) => (
                    <CityDiv key={index} background={item.image} title={item.title} />
                        ))}
            </div>
           
        )
    } 
}

export class CityDiv extends React.Component{
    render(){
        return (
                <div className='cityDiv'
                  style={{ background: `url('${this.props.background}') no-repeat center center` }}>
                    <h2>{this.props.title}</h2>
                </div>
              
        )
    }
}