const MessageSystem = {
  events: {},
  dispatch(event, data) {
    if (!this.events[event]) {
      return; // no one is listening to this event
    }
    for (let i = 0; i < this.events[event].length; i++) {
      this.events[event][i](data);
    }
  },
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = []; // new event
    }
    this.events[event].push(callback);
  },
};

MessageSystem.searchEvent = 'SearchEvent';


export default MessageSystem;
