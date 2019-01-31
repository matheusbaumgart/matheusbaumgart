import { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            // window.scrollTo(0, 0)
            var scrollStep = -window.scrollY / (140 / 15),
                scrollInterval = setInterval(function () {
                    if (window.scrollY != 0) {
                        window.scrollBy(0, scrollStep);
                    }
                    else clearInterval(scrollInterval);
                }, 15);
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop)