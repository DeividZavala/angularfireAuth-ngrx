import {Observable, BehaviorSubject} from 'rxjs';
import {User} from './auth/shared/services/auth.service';


interface State {
  user: User;
}

const initialState: State = {
  user: null
};

export class Store {
  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
