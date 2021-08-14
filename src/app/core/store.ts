import { BehaviorSubject, Observable } from 'rxjs';
export class Store  <T> {
  public  state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  constructor(initialState: T) {
      this._state$ = new BehaviorSubject<T>(initialState);
      this.state$ = this._state$.asObservable();
  }
  
  get state() {
       return this._state$.getValue();
  }

  protected setState(nextState: T) {
      console.log('current state' +  JSON.stringify(this.state));

      this._state$.next(nextState);
      console.log('next state ' +  JSON.stringify(this.state));
  } 
}
