import {Observable, BehaviorSubject} from 'rxjs';
import {distinctUntilChanged, pluck} from 'rxjs/operators';
import {User} from './auth/shared/services/auth.service';


interface State {
  user: User;
}

const initialState: State = {
  user: null
};

export class Store {
  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable().pipe(
    distinctUntilChanged()
  );

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(
      pluck(name)
    );
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
