import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumToString' })
export class EnumToStringPipe implements PipeTransform {
  transform(value: string, enumType: any): any {
    return enumType[value];
  }
}