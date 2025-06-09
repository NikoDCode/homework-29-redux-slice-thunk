import { Action, Middleware } from '@reduxjs/toolkit'

interface LoggerOptions {
  collapsed?: boolean
  timestamp?: boolean
}

export const createLogger = (options: LoggerOptions = {}): Middleware => {
  const { collapsed = false, timestamp = true } = options

  return (storeApi) => (next) => (action) => {
    const prevState = storeApi.getState().counter.count
    const startTime = Date.now()
    const result = next(action)
    const nextState = storeApi.getState().counter.count
    const took = Date.now() - startTime

    const message = `
    ${timestamp ? `⏱ Action виконано за ${took}ms | ` : ''}
    📊 Попередній стан: ${prevState}
    📝 Діспатч екшену: ${(action as Action).type}
    🎯 Наступний стан: ${nextState}
    `

    if (collapsed) {
      console.groupCollapsed(`Redux Logger: ${(action as Action).type}`)
      console.log(message)
      console.groupEnd()
    } else {
      console.log(message)
    }

    return result
  }
}

export const logger = createLogger()
