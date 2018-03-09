import { observable, action } from 'mobx'

class Test {
  @observable num = 0

  @action inc = () => {
    this.num += 1
  }
  @action dec = () => {
    this.num -= 1
  }
}

const test = new Test()

const store: any = {
  test,
}

export default store