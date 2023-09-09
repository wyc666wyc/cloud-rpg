import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

interface Respone<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor implements NestInterceptor<T, Respone<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Respone<T>> | Promise<Observable<Respone<T>>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        status: 0,
        extra: {},
        message: 'success',
        success: true,
      })),
    );
  }
}
