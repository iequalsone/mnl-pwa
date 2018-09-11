

import React, { Component } from "react";
import Icon from "../../images/mnl-icon.png";

class AddToHomeScreen extends Component {
  render() {
    var text = 'Tap <i class="ion-ios-upload-outline"></i> then select <span>Add to Homescreen</span> to install this app on your device.';

    return <div className="A2HS text-center" onClick={() => this.remove()}>
      <p><img src={Icon} width="50px" height="50px" /></p>
      <p>Tap <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAk1BMVEUAAAAAff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff8Aff/XYZRKAAAAMHRSTlMAAQIDCAkMDg8QFhcfICEiIyQpMTRASVFYWVtcX3iAhYaIkZ2eqsjO09ng7e/3+/38YTxXAAACt0lEQVR42u3X2W4TMQCGUZeylTVAW3baAmUvyfs/HVCVaDaPjTIIbJ//ynfOd6QkMyHYv9zRSeP9m81J4/1NC1z2Nyxw1d+swLa/UYFOf5MCvf4GBQb9zQmM+hsTmOhvSmCyvyGBSH8zAtH+RgRm+psQmO1vQCDRX71Asr9ygX7/euJUt0C//+X77fHx9yYEBv3h3fYcVi0IDPu7AC0IjPp7APULjPv7AAOB0wb6BwB1C0z1DwFqFpjsHwHUKzDdPwaoVaDf/yLEAcLDGgVi/VMANQpE+ycB6hOI908D1CYw0x8BqEtgrj8GUJPAbH8UYCBwVmt/HKAWgX7/85APEB7UIJDqnwOoQSDZPwtQvkC6fx6gdIGM/gRA2QI5/SmAkgWy+pMA5Qrk9acBShXI7M8AKFNg72P3Qz8LuwCE+12Bi9tlCFz/ktWfBdAVWK9K+Q7c+prTnwfQETgs51fwzkVGfybAVuC4pP/B1TrdnwtwJfCqrCehw3R/NsClwOvSnoWPk/35AD8F3pb3NnQvLAcQ7u6FCvcHAHUOAAAAAAAAAAAAAAAAAAD8p3uy6G7mAewve+v+LgCbRXeUB3Cw7K0HAAAAAAAAAAAAOwF8eLTAbuQBXFvirrOFAc5Lexd4CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYcm8+/V6jAH91AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBr384L2+eFAQoeAAAAAAAAAABAZD8A45PWcgeztQQAAAAASUVORK5CYII=" /> then select <span>Add to Homescreen</span> to install this app on your device.</p></div >;
  }

  remove() {
    let elem = document.querySelector('#A2HS');
    elem.parentNode.removeChild(elem);
  }
}

export default AddToHomeScreen;