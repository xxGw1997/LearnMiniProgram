Page({
  data:{
    name:'xxGw',
    age:18,
    hobbys:[
      { id: 1, name: 'games' },
      { id: 2, name: 'girls' },
      { id: 3, name: 'sleep' }
    ],
    counter:0
  },
  handleBtnClick(){
    //错误做法
    // this.data.counter += 1

    //2.this.setData()
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubClick(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})