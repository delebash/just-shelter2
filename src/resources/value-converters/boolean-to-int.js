export class BooleanToIntValueConverter{
  toView(int){
    if(int === 1){
      return true
    }
    return false
  }
  fromView(boolean){
    if(boolean === true){
      return 1
    }
    return 0
  }
}
