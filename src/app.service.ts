import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { response } from 'express';
import { delay, interval } from 'rxjs';


@Injectable()
export class AppService {
  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy){}

  async getHello(){
   
    const published = this.client.send({cmd: 'greeting'}, 'Progressive Coder');
    return new Promise(async (res,rej) => {
      
      published.subscribe(value =>  
        setTimeout(() =>res(value),5000)   
      );
    })
    console.log(response);
    // return "returned";
    
  }
  async publishEvent() {
    this.client.emit('book-created', {'bookName': 'The Way Of Kings', 'author': 'Brandon Sanderson'});
    // publisher.subscribe(value => console.log(value));
  }
}

