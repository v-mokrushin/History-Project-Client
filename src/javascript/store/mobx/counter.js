import { observable } from "mobx";

const counter = observable({
  count: 0,
  increase() {
    this.count = this.count + 1;
  },
});

export default counter;
