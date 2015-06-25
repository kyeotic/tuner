export class TrimValueConverter {
  toView(value, option){
    return (value || '').substring(0, option);
  }
}