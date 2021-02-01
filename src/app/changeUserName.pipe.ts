import { Pipe, PipeTransform } from '@angular/core';
import { Operat } from './model/operat/operat/Operat';
import { UserService } from './_service/user.service/user.service';

@Pipe({
  name: 'changeUserName'
})
export class ChangeUserNamePipe implements PipeTransform {

constructor(private userService: UserService){}

  transform(value: Array<Operat>): Array<Operat> {
    const operatsWithUserName: Array<Operat> = [];
    value.forEach(operat => {
      this.userService.getUserById(operat.createUser).subscribe(data => {
        operat.createUserName = data.username;
        operatsWithUserName.push(operat);
      });
    });
    return operatsWithUserName;
  }

}
