import { Component } from "react";

export default class MyTime extends Component {
  constructor() {
    console.log("1. MyTime constructor called");
    super();
    this.state = {
      time: '',
      label: ''
    };
    this.timer = null; // To store the interval
  }

  displayTime = (label, timeZone, locale) => {
    // Clear existing interval if any
    if (this.timer) clearInterval(this.timer);

    // Function to update time
    const updateTime = () => {
      const options = {
        timeZone: timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: true
      };

      const currentTime = new Date().toLocaleString(locale, options);

      this.setState({
        time: currentTime,
        label: label
      });
    };

    // Immediately set time and then repeat every second
    updateTime();
    this.timer = setInterval(updateTime, 1000);
  };

  componentWillUnmount() {
    // Clear timer when component unmounts to avoid memory leaks
    if (this.timer) clearInterval(this.timer);
  }

  render() {
    console.log("3. MyTime render called");
    return (
      <div>
        <h2>{this.state.label}</h2>
        <p>{this.state.time}</p>

        <button onClick={() =>
          this.displayTime('India Time', 'Asia/Kolkata', 'en-IN')
        }>
          Show India Time
        </button>

        <button onClick={() =>
          this.displayTime('US Time', 'America/New_York', 'en-US')
        }>
          Show US Time
        </button>

        <button onClick={() =>
          this.displayTime('Australia Time', 'Australia/Sydney', 'en-AU')
        }>
          Show Australia Time
        </button>
      </div>
    );
  }
}
