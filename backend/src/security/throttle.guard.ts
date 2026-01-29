import { Injectable } from '@nestjs/common'
import { ThrottlerGuard } from '@nestjs/throttler'
import { Request } from 'express'

@Injectable()
export class IpThrottleGuard extends ThrottlerGuard {
  protected getTracker(req: Request): string {
    return (
      req.ip ||
      req.headers['x-forwarded-for']?.toString() ||
      'unknown'
    )
  }
}
