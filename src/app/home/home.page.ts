import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  arrStatus = [{
    id: '1',
    status: 'Pending',
    isDone: true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus amet atque, doloremque reiciendis'
  }, {
    id: '2',
    status: 'Approved',
    isDone: false,
    description: 'natus explicabo iste incidunt quisquam deleniti sequi temporibus pariatur perferendis molestias?'
  }, {
    id: '3',
    status: 'Completed',
    isDone: false,
    description: 'Completed'
  }];
  selectedId = '1';

  constructor() {}

  selectStatus(event: any) {
    this.arrStatus.forEach(item => {
      if (item.id === event.detail.value) {
        this.selectedId = item.id;
        item.isDone = true;
        console.log(this.selectedId);
      }
    });
  }
}
