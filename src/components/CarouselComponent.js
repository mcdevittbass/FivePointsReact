import React from 'react';
import { EVENTPHOTOS } from '../shared/eventphotos';
import { TOASTPHOTOS } from '../shared/toastphotos';
import UncontrolledCarousel from 'reactstrap/lib/UncontrolledCarousel';

export function EventCarousel(props) {
    return (
        <UncontrolledCarousel items={EVENTPHOTOS}/>
    )
}

export function ToastCarousel(props) {
    return (
        <UncontrolledCarousel items={TOASTPHOTOS} />
    )
}

/*class EventCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            animating: false
        };
    }
    
    setAnimating = (set) => {
        this.setState(
            {animating: set}
        )
    }
    
    setActiveIndex = (set) => {
        this.setState(
            {activeIndex: set}
        ) 
    }

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        this.setActiveIndex(nextIndex);
      }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        this.setActiveIndex(nextIndex);
      }
    
    const goToIndex = (newIndex) => {
        if (animating) return;
        this.setActiveIndex(newIndex);
      }
    
    const slides = EVENTPHOTOS.map((item) => {
        return (
          <CarouselItem
            className="event-photo"
            tag="div"
            key={item.id}
            onExiting={() => this.setAnimating(true)}
            onExited={() => this.setAnimating(false)}
          >
          </CarouselItem>
        );
      })

      render() {
        return (
            <React.Fragment>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}>
                    <CarouselIndicators items={EVENTPHOTOS} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                    {this.slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </React.Fragment>
            );
        }
    }
export default EventCarousel; */
