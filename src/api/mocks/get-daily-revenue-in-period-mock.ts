import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '29/01/2024', receipt: 2000 },
    { date: '30/01/2024', receipt: 800 },
    { date: '31/01/2024', receipt: 240 },
    { date: '01/02/2024', receipt: 872 },
    { date: '02/02/2024', receipt: 450 },
    { date: '03/02/2024', receipt: 1000 },
  ])
})
